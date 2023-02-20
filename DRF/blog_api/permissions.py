from rest_framework import permissions

# POST CRUD 권한
class IsAuthorOrReadOnly(permissions.BasePermission):
    
    def has_object_permission(self, request, view, obj):
        # Read
        if request.method in permissions.SAFE_METHODS:
            return True
        # Update, Delete only author
        return obj.author.id == request.user.id

