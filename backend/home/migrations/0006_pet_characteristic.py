# Generated by Django 2.2.28 on 2023-06-09 14:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_remove_characteristics_pet'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='characteristic',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pet_characteristic', to='home.Characteristics'),
        ),
    ]