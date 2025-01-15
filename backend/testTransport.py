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




import googlemaps
import polyline
import folium
from config import gmaps_api_key


def routes(src, dest):
    gmaps = googlemaps.Client(key=gmaps_api_key)
    directions_result = gmaps.directions(src, dest)
    encoded_polyline = directions_result[0]['overview_polyline']['points']
    decoded_coordinates = polyline.decode(encoded_polyline)

    m = folium.Map(location=decoded_coordinates[0], zoom_start=5)
    folium.PolyLine(decoded_coordinates, color="blue", weight=2.5, opacity=1).add_to(m)
    m.save("my-app/public/route_map.html")

if __name__ == '__main__':
    routes("Katy, Texas", "Austin, Texas")