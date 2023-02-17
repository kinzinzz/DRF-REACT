# Generated by Django 4.1.5 on 2023-02-16 11:45

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(default='posts/default.jpg', upload_to=blog.models.upload_to, verbose_name='Image'),
        ),
    ]