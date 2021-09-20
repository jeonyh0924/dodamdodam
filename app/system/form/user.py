from django import forms
from django.contrib.auth import get_user_model

User = get_user_model()


class LoginForm(forms.Form):
    username = forms.CharField(max_length=255, required=True, label='아이디', )
    password = forms.CharField(widget=forms.PasswordInput, required=True, label='비밀번호', )

    class Meta:
        model = User

    def clean_username(self):
        qs = User.objects.filter(username=self.cleaned_data['username'])
        if not qs:
            self.add_error('username', '존재하는 아이디가 아닙니다.')
            return
        else:
            return self.cleaned_data['username']

    def clean_password(self):
        try:
            qs = User.objects.get(username=self.cleaned_data['username'])
            if not qs.check_password(self.cleaned_data['password']):
                self.add_error('password', '틀린 비밀번호 입니다.')
            else:
                return self.cleaned_data['password']
        except User.DoesNotExist:
            return


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password', 'is_activate', 'type', ]

        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'password': forms.PasswordInput(attrs={'class': 'form-control'}),
            'type': forms.Select(
                attrs={
                    'class': 'form-control',
                }
            ),
            'is_activate': forms.CheckboxInput(attrs={'class': 'form-control'}),
        }
        labels = {
            'username': '사용자 계정',
            'password': '비밀번호',
            # 'email': '이메일',
            'type': '계정 유형',
            'is_activate': '계정 활성화 여부',
        }

    def clean_username(self):
        try:
            username = self.cleaned_data['username']
        except User.DoesNotExist:
            self.add_error('username', '존재하는 유저가 없습니다.')
        return username

    def clean_process(self):
        """
        계정 유형이 '공정 담당자' 가 아닐 경우
        process에 대한 데이터를 가질 수 없다.
        :return:
        """
        process = self.cleaned_data['process']

        return process

    def clean(self):
        super().clean()

    def save(self, *args, **kwargs):
        if self.errors:
            raise ValueError('폼의 유효성 검증에 실패하였습니다.')
        user = User.objects.create_user(
            **self.cleaned_data
        )
        return user


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = (
            'username',
            'password',
            'type',
        )
        widgets = {
            'username': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': '수정할 사용자 이름을 입력 해주세요'
                },
            ),
            'password': forms.PasswordInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': '수정할 비밀번호를 입력 해주세요'
                }
            ),
            'type': forms.Select(
                attrs={
                    'class': 'form-control',
                }
            ),
        }
        labels = {
            'username': "사용자 이름",
            'type': '계정 유형',
        }
