from django.urls import path, include
from cadastro_centros import views
from cadastro_centros.views import CentrosCad, CentrosListagem, CentrosCadFl, CentrosListagemFl

urlpatterns = [
    path('', views.abertura_modelform, name='index'),
    path('cadastro/', CentrosCad.as_view(), name='cadastro'),
    path('listagem/', CentrosListagem.as_view(), name='listagem'),
    path('cadastro_fl/', CentrosCadFl.as_view(), name='cadastro_fl'),
    path('listagem_fl/', CentrosListagemFl.as_view(), name='listagem_fl'),
]
