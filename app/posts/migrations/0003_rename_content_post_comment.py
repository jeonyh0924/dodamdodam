# Generated by Django 3.2.4 on 2021-06-16 01:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='content',
            new_name='comment',
        ),
    ]
