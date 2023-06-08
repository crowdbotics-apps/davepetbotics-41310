from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    type = models.CharField(max_length=100,)
    isfavorite = models.BooleanField()
    date_adopted = models.TextField()
    description = models.TextField()
    attributes = models.TextField()
    imageurl = models.URLField()
