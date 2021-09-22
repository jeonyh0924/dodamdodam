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
    price = models.PositiveIntegerField(help_text='상품설명', default=0)
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
    package = models.ForeignKey(
        'items.Package',
        on_delete=models.CASCADE
    )


class Package(TimeStampedModel):
    pass


class PackageLike(TimeStampedModel):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    package = models.ForeignKey(
        'items.Package',
        on_delete=models.CASCADE,
    )

    class Meta:
        unique_together = ('user', 'package')
