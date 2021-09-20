from django.urls import path

from posts.views import PostListView, post_create, PostUpdateView, PostDetailView

app_name = 'posts'

urlpatterns = [
    path('', PostListView.as_view(), name='post-list'),
    path('<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('update/<int:pk>/', PostUpdateView.as_view(), name='post-update'),
    path('create/', post_create, name='post-create'),
]
