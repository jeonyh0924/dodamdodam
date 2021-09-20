from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=100, help_text='제목', )
    comment = models.TextField(max_length=100, help_text='내용', )
    photo = models.ImageField(upload_to="%Y/%m/%d")
    created_at = models.DateField(auto_now_add=True)

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='posts',
    )


class Comment(models.Model):
    content = models.TextField(help_text='내용', )

    post = models.ForeignKey(
        'posts.Post',
        on_delete=models.CASCADE,
        related_name='comments',
    )
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='comments',
    )
