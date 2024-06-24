from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def get(request):
    return Response('Server is up and running')


@api_view(['POST'])
def post(request):
    print(request.data)
    return Response(request.data)