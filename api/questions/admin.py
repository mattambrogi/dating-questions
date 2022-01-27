from django.contrib import admin
from .models import Question
from django.contrib.auth import get_user_model





class QuestionAdmin(admin.ModelAdmin):
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "author":
            kwargs["queryset"] = get_user_model().objects.filter(
                username=request.user.username
            )
        return super(QuestionAdmin, self).formfield_for_foreignkey(
            db_field, request, **kwargs
        )

admin.site.register(Question, QuestionAdmin)
