from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.
@api_view(['GET'])
def getTasks(request):
    tasks = Todo.objects.all()
    serializer = TodoSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addTask(request):
    return Response(request.data)