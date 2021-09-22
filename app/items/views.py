from datetime import datetime

from django.shortcuts import get_object_or_404, redirect
from django.views.generic import ListView, DetailView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from items.models import Breads, UserChoices, Package, PackageLike


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
        context['author'] = kwargs.get('object').userchoices_set.first()
        return context


class PackageLikeCreateView(APIView):
    def post(self, request):
        query_params = request.query_params
        previous_path = query_params.get('previous')
        package_pk = query_params.get('package')
        status = query_params.get('status')
        package_ins = Package.objects.get(pk=package_pk)
        ins, created = PackageLike.objects.get_or_create(user=request.user, package=package_ins)
        if status == 'delete':
            ins.delete()
        return redirect(previous_path)
