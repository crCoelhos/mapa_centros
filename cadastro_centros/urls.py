from django.urls import path, include
from cadastro_centros import views
from cadastro_centros.views import CentrosCad, CentrosListagem

urlpatterns = [
    path('', views.abertura_modelform, name='index'),
    path('cadastro/', CentrosCad.as_view(), name='cadastro'),
    path('listagem/', CentrosListagem.as_view(), name='listagem'),
]
