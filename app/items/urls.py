from django.urls import path

from items.views import *

app_name = 'items'

urlpatterns = [
    path('', BreadsListView.as_view(), name='bread-list'),
    path('choice/', ChoiceListView.as_view(), name='choice-create'),
    path('package/<int:pk>/', PackageDetailView.as_view(), name='package-detail'),
    path('packageLike/', PackageLikeCreateView.as_view(), name='package-like'),
]
