from django.db import models

#tabela de cadastro de centros
class Centros(models.Model):
    nome_centro = models.CharField('Digite o nome o centro', max_length=100)
    sigla_centro  = models.CharField('Digite a sigla do centro', max_length=15)
    latitude = models.CharField('Digite a latitude', max_length=15)
    longitude = models.CharField('Digite a longitude', max_length=15)
    
    def __str__(self):
        return self.nome_centro
