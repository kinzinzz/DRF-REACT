# Generated by Django 3.2.12 on 2023-02-19 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_rename_user_name_newuser_username_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='newuser',
            old_name='username',
            new_name='user_name',
        ),
        migrations.AlterField(
            model_name='newuser',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
