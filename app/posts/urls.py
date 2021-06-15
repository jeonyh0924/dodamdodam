from django.urls import path

from posts.views import PostListView, post_create

app_name = 'posts'

urlpatterns = [
    path('', PostListView.as_view(), name='post-list'),
    path('create/', post_create, name='post-create'),
]
