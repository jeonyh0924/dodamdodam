from django.urls import path

from items.views import *

app_name = 'items'

urlpatterns = [
    path('', BreadsListView.as_view(), name='bread-list'),
]
