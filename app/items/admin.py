from django.contrib import admin

from items.models import Breads, UserChoices, Package


@admin.register(Breads)
class BreadAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'desc', ]


@admin.register(UserChoices)
class UserChoicesAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'bread', ]


@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ['id', 'created_at']
