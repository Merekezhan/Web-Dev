from django.urls import path
from . import views

urlpatterns = [

    path('', views.company_list),
    path('<int:pk>/', views.company_detail),
    

    path('cbv/', views.CompanyListAPIView.as_view()),
    path('cbv/<int:pk>/', views.CompanyDetailAPIView.as_view()),
]