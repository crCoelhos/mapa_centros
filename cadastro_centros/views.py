from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.views.decorators.csrf import csrf_exempt
from .models import Centros_Rio_Branco, Centros_Floresta

from django.urls import reverse_lazy


def abertura_modelform(request):
    return render(request,"index.html")

#campus rio branco/rbo
class CentrosCad(CreateView):
    model = Centros_Rio_Branco
    fields = ['nome_centro','sigla_centro', 'latitude','longitude']
    template_name = 'cadastro_centros/index_cadastro.html'
    success_url = reverse_lazy('listagem')
    


class CentrosListagem(ListView):
    model = Centros_Rio_Branco
    template_name = 'cadastro_centros/listar_cadastro.html'
    
    


#campus floresta/czs
class CentrosCadFl(CreateView):
    model = Centros_Floresta
    fields = ['nome_centro_fl','sigla_centro_fl', 'latitude_fl','longitude_fl']
    template_name = 'cadastro_centros/index_cadastro_floresta.html'
    success_url = reverse_lazy('listagem_fl')
    


class CentrosListagemFl(ListView):
    model = Centros_Floresta
    template_name = 'cadastro_centros/listar_cadastro_floresta.html'


