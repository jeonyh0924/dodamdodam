## setup
- python 3.7.5
- django 3.2.4

## virtualenv -set up
- `pyenv virtualenv 3.7.5 <env-name>`
- pyenv local `<env-name>`
- pip install -r requirements.txt


## database setup
- ./manage.py makemigrations
- ./manage.py migrate
- ./manage.py createsuperuser
