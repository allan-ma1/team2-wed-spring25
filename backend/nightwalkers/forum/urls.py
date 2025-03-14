from django.urls import path
from . import views

urlpatterns = [
    # Post endpoints
    path("posts/", views.get_posts, name="get_posts"),
    path("posts/create/", views.create_post, name="create_post"),
    path("posts/<int:post_id>/", views.get_post, name="get_post"),
    # Comment endpoints
    path(
        "posts/<int:post_id>/comments/create/",
        views.create_comment,
        name="create_comment",
    ),
    # Like endpoints
    path("posts/<int:post_id>/like/", views.like_post, name="like_post"),
    path("posts/<int:post_id>/unlike/", views.unlike_post, name="unlike_post"),
]
