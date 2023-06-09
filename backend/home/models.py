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
    user = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="pet_user",)
class Characteristics(models.Model):
    'Generated Model'
    breed = models.CharField(max_length=100,)
    color = models.CharField(max_length=100,)
    pet = models.ForeignKey("home.Pet",on_delete=models.CASCADE,related_name="characteristics_pet",)
