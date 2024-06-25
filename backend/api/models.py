from django.db import models

# Create your models here.
class Todo(models.Model):
    StatusChoices = [
        ('not started', 'Not Started'),
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    ]
    task = models.CharField(max_length=50)
    due = models.DateField()
    status = models.CharField(max_length=50, choices=StatusChoices)