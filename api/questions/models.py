from unicodedata import east_asian_width
from django.db import models
from django.contrib.auth.models import User


class Question(models.Model):

    class Level(models.IntegerChoices):
        CHILL = 1 
        DEEP = 2
        DEEPER = 3

    level = models.IntegerField(choices=Level.choices)
    body = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body



