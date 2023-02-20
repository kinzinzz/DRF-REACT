from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, UserProfile

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('detail/<str:pk>/', UserProfile.as_view(), name="user_detail"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
]