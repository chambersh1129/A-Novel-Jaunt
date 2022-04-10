from django.urls import path
from workouts.views import HomePageView, CalendarPageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("calendar", CalendarPageView.as_view(), name="calendar"),
]
