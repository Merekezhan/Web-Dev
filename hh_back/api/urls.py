from django.urls import path
from . import views

from .views import (CompanyListView, CompanyDetailView, VacanciesByCompanyView, 
                    VacancyListView, VacancyDetailView, TopTenVacanciesView)

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', VacanciesByCompanyView.as_view(), name='company-vacancies'),

    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
    path('', CompanyListView.as_view()),

]