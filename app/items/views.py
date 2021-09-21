from django.views.generic import ListView

from items.models import Breads


class BreadsListView(ListView):
    model = Breads
    template_name = 'items/bread_list.html'
    context_object_name = 'bread_qs'
