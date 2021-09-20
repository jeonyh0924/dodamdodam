from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERTYPE = (
        ('CONSUMER', '소비자'),
        ("SUPERVISOR", "최고관리자"),
    )
    type = models.CharField(help_text='계정 유형', max_length=20, choices=USERTYPE, default='SUPERVISOR')
    is_activate = models.BooleanField(help_text='계정 활성화 여부', null=True, blank=True)

    class Meta:
        verbose_name = '사용자'
        verbose_name_plural = '사용자들 - User'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if len(self.password) <= 20:
            self.password = make_password(self.password)
            self.save()


class UserLogManagerQuerySet(models.QuerySet):
    def users_login_time(self, login, logout):
        return self.filter(login__gte=login, logout__lte=logout)

    def user_login_time(self, login, logout, user):
        return self.filter(login__gte=login, logout__lte=logout, user=user)


class UserLog(models.Model):
    login = models.DateTimeField(help_text='로그인 시간', blank=True, null=True, )
    logout = models.DateTimeField(help_text='로그아웃 시간', blank=True, null=True, )
    user = models.ForeignKey(User, on_delete=models.CASCADE, help_text='유저')

    objects = models.Manager()
    times = UserLogManagerQuerySet.as_manager()

    class Meta:
        verbose_name = '유저 접속시간'
        verbose_name_plural = '유저들의 접속 기간 - UserLog'

    @property
    def calculate_time(self):
        return (self.logout - self.login).seconds

    @property
    def convert_to_minute(self):
        return self.calculate_time // 60
