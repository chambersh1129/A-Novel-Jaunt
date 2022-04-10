from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


class CalendarPageView(TemplateView):
    template_name = "calendar.html"
