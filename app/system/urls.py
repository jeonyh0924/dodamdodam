from django.urls import path

from system.views import user_logout, UserLoginView, UserListView, UserUpdateView, user_create

app_name = 'system'

urlpatterns = [
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('logout/', user_logout, name='user-logout'),


    path('user/', UserListView.as_view(), name='user-list'),
    path('user/<int:pk>/', UserUpdateView.as_view(), name='user-update'),
    path('user/create/', user_create, name='user-create'),
]
