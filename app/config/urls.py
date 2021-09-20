"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import json
from ast import literal_eval

from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.urls import path, include

from config import settings
from posts.models import Post
from system.views import UserLoginView

User = get_user_model()


def get_literal_eval(eval_list):
    for data in eval_list:
        ret_list = literal_eval(data)

    return ret_list


def delete_exec(model, check_list):
    for obj in get_literal_eval(check_list):
        if model == 'account':
            User.objects.get(pk=int(obj['id'])).delete()
        elif model == 'post':
            Post.objects.get(pk=int(obj['id'])).delete()


def select_del(request):
    delete_exec(
        request.POST.get('tableIndex'),
        request.POST.getlist('checkList')
    )

    return HttpResponse(
        json.dumps({
            'result': 'success',
        }), content_type='application/json')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('del/', select_del, name='del'),
    path('', UserLoginView.as_view(), name='user-login'),
    path('system/', include('system.urls')),
    path('posts/', include('posts.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
