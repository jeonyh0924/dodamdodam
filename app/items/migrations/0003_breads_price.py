# Generated by Django 3.2.4 on 2021-09-22 02:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0002_userchoices_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='breads',
            name='price',
            field=models.PositiveIntegerField(default=0, help_text='상품설명'),
        ),
    ]