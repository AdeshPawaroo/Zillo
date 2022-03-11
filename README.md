# Zillo
Welcome to Zillo! Zillo is a clone of the real estate marketing website Zillow. On Zillo users are able to view different listings that are available to them, as well as post their own properties for sale!

# Live Site - [Zillo](https://zillo-fs.herokuapp.com/)

![image](https://user-images.githubusercontent.com/80853626/157956749-4fa4b30f-feb3-4c5d-b362-c5fbe069b6ed.png)
![image](https://user-images.githubusercontent.com/80853626/157956802-1e72d2dd-4681-4848-aa38-6209dae35128.png)

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

![image](https://user-images.githubusercontent.com/80853626/157957974-05734cb3-4990-495b-8476-746af9ce16b6.png)

# Future Plans
My main plan for the future is to implement a functional searchbar. This will be available in multiple spots throughout the website and will allow users to search for homes filtering by zipcode, style, number of beds/baths, sqft or by realator.
