from django import forms

from .models import Post, Comment


class PostCreateForm(forms.Form):
    photo = forms.ImageField(
        widget=forms.FileInput(
            # HTML위젯의 속성 설정
            # form-control-file클래스를 사용
            attrs={
                'class': 'form-control-file',
            }
        )
    )
    comment = forms.CharField(
        # 반드시 채워져 있을 필요는 없음
        required=False,
        # HTML랜더링 위젯으로 textarea를 사용
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
            }
        ),
    )

    def save(self, **kwargs):
        post = Post.objects.create(
            photo=self.cleaned_data['photo'],
            **kwargs,
        )
        comment_content = self.cleaned_data.get('comment')
        if comment_content:
            post.comments.create(
                author=post.author,
                content=comment_content,
            )
        return post


class CommentCreateForm(forms.Form):
    content = forms.CharField(
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'rows': 2,
            }
        )
    )

    def save(self, post, **kwargs):
        content = self.cleaned_data['content']
        return post.comments.create(
            content=content,
            **kwargs,
        )


class PostForm(forms.ModelForm):
    comment = forms.CharField(
        label='내용',
        required=False,
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'rows': 2,
            }
        )
    )

    class Meta:
        model = Post
        fields = [
            'title',
            'photo',
            'comment',
        ]
        widgets = {
            'photo': forms.ClearableFileInput(
                attrs={
                    'class': 'form-control-file',
                }
            ),
            'title': forms.TextInput(
                attrs={
                    'class': 'form-control',
                }
            )

        }

    def save(self, *args, **kwargs):
        if self.errors:
            raise ValueError('폼의 유효성 검증에 실패하였습니다.')
        user_ins = kwargs['context'].user
        post = Post.objects.create(
            **self.cleaned_data,
            author=user_ins
        )
        return post


class PostUpdateForm(forms.ModelForm):
    comment = forms.CharField(
        label='내용',
        required=False,
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'rows': 2,
            }
        )
    )

    class Meta:
        model = Post
        fields = [
            'title',
            'photo',
            'comment',
        ]
        widgets = {
            'photo': forms.ClearableFileInput(
                attrs={
                    'class': 'form-control-file',
                }
            ),
            'title': forms.TextInput(
                attrs={
                    'class': 'form-control',
                }
            )

        }


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = [
            'content',
        ]
        widgets = {
            'content': forms.Textarea(
                attrs={
                    'class': 'form-control',
                    'rows': 2,
                }
            )
        }
