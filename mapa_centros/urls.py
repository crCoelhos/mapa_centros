from django.contrib import admin

from django.urls import path, include
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    #auth
    path('accounts/', include('allauth.urls')),
    
    #local
    path('', include('cadastro_centros.urls')),
    path('', include('pages.urls', namespace='pages')),
]
