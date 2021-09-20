from datetime import datetime

from django.contrib.auth import logout, authenticate, login, get_user_model
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import FormView, ListView, UpdateView

from system.form.user import LoginForm, UserForm, UserUpdateForm
from system.models import UserLog

User = get_user_model()


class UserLoginView(FormView):
    template_name = 'system/login.html'
    form_class = LoginForm
    success_url = reverse_lazy('system:user-list')

    def form_valid(self, form):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']

        user = authenticate(self.request, username=username, password=password)
        if user:
            login(self.request, user)
            UserLog.objects.create(user=user, login=datetime.now())
        return super().form_valid(form)


def user_logout(request):
    log = UserLog.objects.filter(user=request.user).last()
    log.logout = datetime.now()
    log.save()
    logout(request)
    next_path = request.GET.get('next')
    if next_path:
        return redirect(next_path)
    return redirect('system:user-list')


class UserListView(ListView):
    model = User
    form = UserForm
    template_name = 'system/list_account.html'
    context_object_name = 'user_lst'


class UserUpdateView(UpdateView):
    model = User
    template_name = 'system/update_account.html'
    form_class = UserUpdateForm
    success_url = reverse_lazy('system:user-list')


def user_create(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('system:user-list')
    form = UserForm
    context = {
        'form': form
    }
    return render(request, 'system/create_account.html', context=context)
