from django.db import models

#tabela de cadastro de centros
class Centros_Rio_Branco(models.Model):
    nome_centro = models.CharField('Digite o nome o centro', max_length=100)
    sigla_centro  = models.CharField('Digite a sigla do centro', max_length=15)
    latitude = models.CharField('Digite a latitude', max_length=25, default='')
    longitude = models.CharField('Digite a longitude', max_length=25, default='')
    
    def __str__(self):
        return self.nome_centro



class Centros_Floresta(models.Model):
    nome_centro_fl = models.CharField('Digite o nome o centro', max_length=100)
    sigla_centro_fl  = models.CharField('Digite a sigla do centro', max_length=15)
    latitude_fl = models.CharField('Digite a latitude', max_length=25, default='')
    longitude_fl = models.CharField('Digite a longitude', max_length=25, default='')
    
    def __str__(self):
        return self.nome_centro_fl
