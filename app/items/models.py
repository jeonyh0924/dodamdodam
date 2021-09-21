from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Breads(TimeStampedModel):
    name = models.CharField(max_length=100, help_text='상품 명', )
    desc = models.TextField(help_text='상품설명')
    photo = models.ImageField(upload_to="%Y/%m/%d")


class UserChoices(TimeStampedModel):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    bread = models.ForeignKey(
        'items.Breads',
        on_delete=models.CASCADE,
    )
    price = models.PositiveIntegerField(
        '지불가격',
    )
