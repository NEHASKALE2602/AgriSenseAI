from weather_service import get_weather

city = input("Enter City: ")

weather = get_weather(city)

print(weather)