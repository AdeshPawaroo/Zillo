# Zillo
Welcome to Zillo! Zillo is a clone of the real estate marketing website Zillow. On Zillo users are able to view different listings that are available to them, as well as post their own properties for sale!

# Live Site - [Zillo](https://zillo-fs.herokuapp.com/)

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
The Google Map displayed on the index page tracks all of the current listings and places markers for them corresponding with the listing's coordinate location. Originally I struggled to grasp the concept of how to place these markers on the map, as well as making sure they were linked to the correct listing. To solve this problem I stored all of the data I needed from a listing inside of an object, then stored that object inside of an array. This streamlined the process of placing the markers in the correct spot as well as insuring that they were linked to the correct listing.

![Screen Shot 2021-11-12 at 9 28 05 AM](https://user-images.githubusercontent.com/80853626/141530010-9960a827-9fb4-4333-82f1-540481b2e4f2.png)

# Problems Faced
The biggest problem I faced during this project was implementing a filtering system. This filtering system would filter out listings based on the current options selected by the user. After a lot of struggling with this concept I realized I was overthinking it, and the best approach was to utilize an object of "flags" for every choice. I would then iterate every listing and check if the current listings value matches the option selected by the user.S With this approach listings would only be displayed to the user if every flag inside of this object returned true.

![image](https://user-images.githubusercontent.com/80853626/157955647-e7ffd11f-262d-4009-8b5d-92bca153ff35.png)

# Future Plans
For now, my main plan for the future is to implement a working searchbar within this project. This will allow users to search up homes filtering by zipcode/style/beds/baths/sqft and more.
