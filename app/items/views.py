from datetime import datetime

from django.views.generic import ListView, DetailView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from items.models import Breads, UserChoices, Package


class BreadsListView(ListView):
    model = Breads
    template_name = 'items/bread_list.html'
    context_object_name = 'bread_qs'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['package_qs'] = Package.objects.all()
        return context


class ChoiceListView(APIView):
    def post(self, request):
        data = request.data.get('row_data')
        pack_ins = Package.objects.create()
        for index in data:
            for field, value in index:
                bread_ins = Breads.objects.get(id=index.get('id'))
                UserChoices.objects.create(user=request.user, bread=bread_ins, package=pack_ins)
        return Response(status=status.HTTP_200_OK)


class PackageDetailView(DetailView):
    template_name = 'items/package_detail.html'
    model = Package

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user_choice_qs'] = kwargs.get('object').userchoices_set.all()
        context['author'] = kwargs.get('object').userchoices_set.first().user.username
        return context
