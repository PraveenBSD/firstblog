from django.shortcuts import render
import django.http.request


# Create your views here.
def det(request, username):
    product=render.objects.all()
    message=request.GET.get("firstname")
    print(message)