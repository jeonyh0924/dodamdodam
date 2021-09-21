from django.contrib import admin

from items.models import Breads, UserChoices


@admin.register(Breads)
class BreadAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'desc', ]


@admin.register(UserChoices)
class UserChoicesAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'bread', ]
