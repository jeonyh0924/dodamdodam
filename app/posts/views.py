from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import CreateView, ListView, UpdateView, DetailView

from posts.forms import PostCreateForm, PostForm, PostUpdateForm
from posts.models import Post


def post_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save(context=request)
            return redirect('posts:post-list')
    form = PostForm
    context = {
        'form': form
    }
    return render(request, 'posts/post_create.html', context=context)


class PostListView(ListView):
    model = Post
    template_name = 'posts/post_list.html'
    context_object_name = 'post_lst'


class PostDetailView(DetailView):
    template_name = 'posts/post_detail.html'
    model = Post


class PostUpdateView(UpdateView):
    model = Post
    template_name = 'posts/post_update.html'
    form_class = PostUpdateForm
    success_url = reverse_lazy('posts:post-list')
