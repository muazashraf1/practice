from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# TokenObtainPairView → Simple JWT ka built-in view hai jo login endpoint create karta hai.
# Input: username & password
# Output: access token + refresh token

# TokenRefreshView → Simple JWT ka built-in view jo refresh token handle karta hai.
# Input: refresh token
# Output: naya access token

from .views import register_view, protected_view
from .views import protected_view

urlpatterns = [
    # login endpoint
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    # refresh endpoint
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("protected/", protected_view, name="protected"),
    path("register/", register_view),
]


# urlpatterns = [
#     path('register/', register_view),
#     path('protected/', protected_view),
# ]
