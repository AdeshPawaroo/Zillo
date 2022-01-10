# Zillo
Zillo is a clone of Zillow. Zillo is a housing marketing website where users can browse houses for sale / rent.

# Live Site - [Zillo](https://zilloh-2.herokuapp.com/#/)

# Technologies
- Ruby
- Rails
- React
- Redux
- Javascript
- HTML
- SCSS
- Git
- PostgreSQL
- Google Maps API

# Features
### Google Maps / Listings
The Google Map displayed on the index tracks all of the current listings and places markers for them corressponding with the listings lat/lng and id. Originally I struggled to grasp the concept of how to place these markers on the map, as well as making sure they were connected to the correct listings. To solve this problem I stored all of my listings lat/lng/index keys in an object, then I stored this objects inside of an array. I iterate through the array grabbing this information from each object, using it to display marker with the correct lat/lng and index.

![Screen Shot 2021-11-12 at 9 28 05 AM](https://user-images.githubusercontent.com/80853626/141530010-9960a827-9fb4-4333-82f1-540481b2e4f2.png)

This object(item) is then also passed to my handleClick method which redirects the user to the listings show page when the marker is clicked.

# Future Plans
For now, my main plan for the future is to implement a working searchbar within this project. This will allow users to search up homes filtering by zipcode/style/beds/baths/sqft and more.
