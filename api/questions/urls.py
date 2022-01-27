from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import QuestionViewSet



router = SimpleRouter()
router.register('', QuestionViewSet, basename='questions')

urlpatterns = router.urls


