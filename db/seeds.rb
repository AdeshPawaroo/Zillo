require "faker";

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# listing = Listing.new({price: 1, beds: 1, baths: 1, sqft: 1, status: 'sold', address: '1', state_id: 1, city_id: 1, zipcode: 1, realator: 'testing', cooling: 'a/c', heating: 'indoor', price_sqft: 1, description: 'tsting', lat: 1, lng: 1, style: 'ranch'})

# Dropping existing databases
User.delete_all
Listing.delete_all

#demo user
demo = User.create!(email: 'demo@demo.com', password: 'demo123')

#City objects
# Queens = City.create!(name: 'queens');
# Brooklyn = City.create!(name: 'brooklyn');
# Manhattan = City.create!(name: 'manhattan');
# Bronx = City.create!(name: 'bronx');
# Staten_Island = City.create!(name: 'staten island');

# #cities array
# cities = [
#     Queens,
#     Brooklyn,
#     Manhattan,
#     Bronx,
#     Staten_Island
# ];

#States
# New_York = State.create!(name: 'New York');

# #states array 
# states = [
#     New_York
# ];
    
#zipcodes array
zipcodes = [
    11111,
    22222,
    33333,
    44444,
    55555,
    66666,
    77777,
    88888,
    99999
];

#status array
status = [
    'for sale',
    'for rent',
];

#realator array
realator = [
    'Pavilion Real Estate',
    'Bargain Real Estate',
    'Underground Real Estate',
    'Eastside Real Estate',
];

#cooling options
cooling = [
    'central air',
    'ductless',
    'evaporitive',
    'portable'
];

#heating options
heating = [
    'hybrid',
    'furnace',
    'radiant',
    'heaters',
];

style = [
    'shack',
    'ranch',
    'manor',
    'palace',
    'mansion',
    'castle',
    'cottage',
    'colonial'
];

#basic description
description = [
    "A rat is an exuberant crocodile? A prune is a prune's tiger. Few can name a unassuming tiger that isn't a fearless snail. 
    The grape is a puppy; A spider is a snail's hamster?  Having been a gymnast, a honorable dog is a fish of the mind? Nowhere 
    is it disputed that authors often misinterpret the wolf as a calm wolf, when in actuality it feels more like a selective crocodile. 
    A blueberry is the bee of a persimmon."
];

# Listings in Queens
listing1 = Listing.create!({
    price: '$2,627,528',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000),
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.683264, 
    lng: -73.823070 
});

listing2 = Listing.create!({
    price: '$1,971,174',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000),
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.773173, 
    lng: -73.796870 
});

listing3 = Listing.create!({
    price: '$2,714,625',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.718040, 
    lng: -73.872761 
});

listing4 = Listing.create!({
    price: '$1,781,049',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.760969, 
    lng: -73.924221 
});

# Listings in Brooklyn
listing5 = Listing.create!({
    price: '$1,323,962',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.667754, 
    lng: -73.892690
});

listing6 = Listing.create!({
    price: '$1,098,618',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.603624, 
    lng: -73.969673 
});

listing7 = Listing.create!({
    price: '$1,576,239',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.652825, 
    lng: -73.956939 
});

listing8 = Listing.create!({
    price: '$450,542',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.625154, 
    lng: -73.997457 
});

# Listings in Manhattan

listing9 = Listing.create!({
    price: '$1,200,343',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.768854, 
    lng: -73.984858 
});

listing10 = Listing.create!({
    price: '$765,329',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.808369, 
    lng: -73.952831 
});

listing11 = Listing.create!({
    price: '$3,458,211',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.718033, 
    lng: -73.993611 
});

listing12 = Listing.create!({
    price: '$558,412',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.757390, 
    lng: -73.984686, 
});

# Listings in Bronx

listing13 = Listing.create!({
    price: '$6,798,221',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.819716, 
    lng: -73.811143 
});

listing14 = Listing.create!({
    price: '$654,212',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.843017, 
    lng: -73.911607, 
});

listing15 = Listing.create!({
    price: '$5,400,212',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.899817, 
    lng: -73.852455 
});

listing16 = Listing.create!({
    price: '$650,212',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.881220, 
    lng: -73.910856
});

# Listings in Staten Island

listing17 = Listing.create!({
    price: '$1,523,112',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.530540, 
    lng: -74.202869 
});

listing18 = Listing.create!({
    price: '$421,546',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.624127, 
    lng: -74.141502
});

listing19 = Listing.create!({
    price: '$2,563,221',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.559731, 
    lng: -74.120241
});

listing20 = Listing.create!({
    price: '$4,161,231',
    beds: rand(5), 
    baths: rand(3..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.559731, 
    lng: -74.120241
});

