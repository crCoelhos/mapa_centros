from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from .models import Centros


from django.urls import reverse_lazy

class CentrosCad(CreateView):
    models = Centros
    fields = ['nome_centro','sigla', 'latitude','longitude']
    template_name = 'cadastro_centros/index_cadastros.html'
    success_url = reverse_lazy('listagem')
    


class CentrosListagem(ListView):
    model = Centros
    template_name = 'cadastro_centros/listar_cadastros.html'



def abertura_modelform(request):
    return render(request, "index.html")