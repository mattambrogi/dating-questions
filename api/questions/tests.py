from django.test import TestCase
from django.contrib.auth.models import User
from .models import Question

# Create your tests here.
class QuestionTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        testuser1 = User.objects.create_user(
            username='testuser1', password='abc123')
        testuser1.save()

        test_question = Question.objects.create(
            level=1, body='What is your favorite food?', author=testuser1
        )
        test_question.save()

    def test_question_content(self):
        question = Question.objects.get(id=1)
        author = f'{question.author}'
        level = f'{question.level}'
        body = f'{question.body}'
        self.assertEqual(author, 'testuser1')
        self.assertEqual(level, '1')
        self.assertEqual(body, "What is your favorite food?")