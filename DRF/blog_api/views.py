from django.shortcuts import get_object_or_404
from blog.models import Post
from .serializers import PostSerializer
from rest_framework import filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .permissions import IsAuthorOrReadOnly

# Display Posts

class PostList(generics.ListAPIView):

    serializer_class = PostSerializer
    queryset = Post.objects.all()
    
class AuthorPostlList(generics.ListCreateAPIView):
    
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    
    def get_queryset(self):
        return Post.objects.filter(author__id=self.kwargs["pk"])


class PostDetail(generics.RetrieveAPIView):

    serializer_class = PostSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, slug=item)

# Post Search

class PostListDetailfilter(generics.ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    # '^' Starts-with search.
    # '=' Exact matches.
    search_fields = ['^slug']

class CreatePost(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminPostDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthorOrReadOnly]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class EditPost(generics.UpdateAPIView):
    permission_classes = [IsAuthorOrReadOnly]
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class DeletePost(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthorOrReadOnly]
    serializer_class = PostSerializer
    queryset = Post.objects.all()