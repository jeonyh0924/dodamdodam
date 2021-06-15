from django.shortcuts import redirect, render
from django.views.generic import CreateView, ListView

from posts.forms import PostCreateForm, PostForm
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
