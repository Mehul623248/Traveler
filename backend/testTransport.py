# import requests

# dst = "Katy"
# origin= "Austin"
# url= "https://maps.googleapis.com/maps/api/directions/json?destination="+dst+"&origin="+origin+"&key="+my_key

# def pull():
#   data = requests.get(url)
#   with open("Trip.txt", 'w+') as f:
#      f.write(data.text)
#   return 0

# # pull()

# def reader():
#   with open("Trip.txt", 'r') as f:
#      for x in f:
#         if "duration" in x:
#            for i in range(4):
#               print(f.readline())
#   return 0 
  
# reader()


# import requests

# # Replace with your API key

# def get_route_polyline(origin, destination):
#     # Directions API URL
#     directions_url = (
#         f"https://maps.googleapis.com/maps/api/directions/json?"
#         f"origin={origin}&destination={destination}&mode=driving&key={API_KEY}"
#     )
    
#     response = requests.get(directions_url)
#     data = response.json()
    
#     if data["status"] == "OK":
#         # Extract the encoded polyline
#         polyline = data["routes"][0]["overview_polyline"]["points"]
#         return polyline
#     else:
#         raise ValueError(f"Error fetching route: {data['status']}")

# def generate_static_map_url(polyline):
#     # Static Maps API URL
#     static_map_url = (
#         f"https://maps.googleapis.com/maps/api/staticmap?"
#         f"size=600x400&path=enc:{polyline}&key={API_KEY}"
#     )
#     return static_map_url

# # Example: New York to Boston
# origin = "New York, NY"
# destination = "Boston, MA"

# try:
#     polyline = get_route_polyline(origin, destination)
#     map_url = generate_static_map_url(polyline)
#     print(f"Static Map URL: {map_url}")
    
# except ValueError as e:
#     print(e)

import googlemaps
import polyline
import folium
from config import gmaps_api_key

gmaps = googlemaps.Client(key=gmaps_api_key)
directions_result = gmaps.directions("Katy, TX", "Austin, TX")
encoded_polyline = directions_result[0]['overview_polyline']['points']
decoded_coordinates = polyline.decode(encoded_polyline)

m = folium.Map(location=decoded_coordinates[0], zoom_start=5)
folium.PolyLine(decoded_coordinates, color="blue", weight=2.5, opacity=1).add_to(m)
m.save("my-app/public/route_map.html")