require "faker";

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# save = Save.new({price: 1, beds: 1, baths: 1, sqft: 1, status: 'sold', address: '1', zipcode: 1, realator: 'testing', description: 'tsting', lat: 1, lng: 1, style: 'ranch'})

# Dropping existing databases
User.destroy_all
Listing.destroy_all
Save.destroy_all

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

style = [
    'bungalow',
    'cottage',
    'victorian',
    'ranch',
    'colonial',
    'manor',
    'villa',
    'chalet',
    'apartment'
];

prices = [
    "$1,126,239",
    "$2,714,625",
    "$2,627,528",
    "$1,098,618",
    "$1,323,962",
    "$1,971,174",
    "$3,458,211",
    "$6,798,221",
    "$654,212",
    "$558,412",
    "$765,329",
    "$650,212",
    "$2,400,212",
    "$1,523,112",
    "$421,546",
    "$4,161,231",
    "$2,563,221",
    "$1,523,112",
    "$7,123,900",
    "$10,232,123",
    "$125,112",
    "$1,235,534",
    "$6,134,234",
    "$7,125,372",
    "$223,544",
    "$3,458,122",
    "$6,123,908",
    "$2,905,121",
    "$900,123"
];

#basic description
description = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
    et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc. Pharetra massa massa ultricies mi quis 
    hendrerit dolor magna. Non enim praesent elementum facilisis leo vel fringilla. Scelerisque eu ultrices vitae auctor. 
    Et netus et malesuada fames ac turpis egestas maecenas. Arcu non sodales neque sodales ut etiam sit. 
    Enim facilisis gravida neque convallis a cras semper auctor neque. Enim lobortis scelerisque fermentum dui faucibus. 
    Eu volutpat odio facilisis mauris sit amet. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. 
    Eget nullam non nisi est sit amet facilisis magna. Sit amet luctus venenatis lectus magna fringilla."
];

# Listings in Queens
listing1 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000),
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.683264, 
    lng: -73.823070,
    owner_id: 0 
});

listing2 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000),
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.773173, 
    lng: -73.796870, 
    owner_id: 0 
});

listing3 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.718040, 
    lng: -73.872761,
    owner_id: 0  
});

listing4 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.760969, 
    lng: -73.924221,
    owner_id: 0  
});

# Listings in Brooklyn
listing5 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.667754, 
    lng: -73.892690,
    owner_id: 0 
});

listing6 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.603624, 
    lng: -73.969673,
    owner_id: 0  
});

listing7 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.652825, 
    lng: -73.956939,
    owner_id: 0  
});

listing8 = Listing.create!({
    price: prices.sample,    
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.625154, 
    lng: -73.997457,
    owner_id: 0  
});

# Listings in Manhattan

listing9 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.768854, 
    lng: -73.984858,
    owner_id: 0  
});

listing10 = Listing.create!({
    price: prices.sample,    
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.808369, 
    lng: -73.952831,
    owner_id: 0  
});

listing11 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.718033, 
    lng: -73.993611,
    owner_id: 0  
});

listing12 = Listing.create!({
    price: prices.sample,    
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.757390, 
    lng: -73.984686, 
    owner_id: 0 
});

# Listings in Bronx

listing13 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.819716, 
    lng: -73.811143,
    owner_id: 0  
});

listing14 = Listing.create!({
    price: prices.sample,    
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.843017, 
    lng: -73.911607, 
    owner_id: 0 
});

listing15 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.899817, 
    lng: -73.852455,
    owner_id: 0  
});

listing16 = Listing.create!({
    price: prices.sample,    
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.881220, 
    lng: -73.910856,
    owner_id: 0 
});

# Listings in Staten Island

listing17 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.530540, 
    lng: -74.202869,
    owner_id: 0  
});

listing18 = Listing.create!({
    price: prices.sample,    
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.624127, 
    lng: -74.141502,
    owner_id: 0 
});

listing19 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.559731, 
    lng: -74.120241,
    owner_id: 0 
});

listing20 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.559731, 
    lng: -74.120241,
    owner_id: 0 
});

listing21 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.606619, 
    lng: -74.135121,
    owner_id: 0 
});

listing22 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.606718,
    lng: -74.079843,
    owner_id: 0 
});

listing23 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.642457, 
    lng: -74.087304,
    owner_id: 0 
});

listing24 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.710994, 
    lng: -73.915172,
    owner_id: 0 
});

listing25 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.737639, 
    lng: -73.953995,
    owner_id: 0 
});

listing26 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.728421, 
    lng: -73.956093,
    owner_id: 0 
});

listing27 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.750426, 
    lng: -73.999191,
    owner_id: 0 
});

listing28 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.812157, 
    lng: -73.948843,
    owner_id: 0 
});

listing29 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.864357, 
    lng: -73.893964,
    owner_id: 0 
});

listing30 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.872462, 
    lng: -73.904040,
    owner_id: 0 
});

listing31 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.735940, 
    lng: -73.788453,
    owner_id: 0 
});

listing32 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.706995, 
    lng: -73.788853,
    owner_id: 0 
});

listing33 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.672514, 
    lng: -73.825068,
    owner_id: 0 
});

listing34 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.678430, 
    lng: -73.843376,
    owner_id: 0 
});

listing35 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.760309, 
    lng: -73.878706,
    owner_id: 0 
});

listing36 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.795557, 
    lng: -73.971778,
    owner_id: 0 
});

listing37 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.790534, 
    lng: -73.977821,
    owner_id: 0 
});

listing38 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.844244, 
    lng: -73.871475,
    owner_id: 0 
});

listing39 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.513644, 
    lng: -74.243534,
    owner_id: 0 
});

listing40 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.549961, 
    lng: -74.216772,
    owner_id: 0 
});

listing41 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.617241, 
    lng: -74.089820,
    owner_id: 0 
});

listing42 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.667136, 
    lng: -73.946987,
    owner_id: 0 
});

listing43 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.701391, 
    lng: 73.946112,
    owner_id: 0 
});

listing44 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.718101, 
    lng: -73.718082,
    owner_id: 0 
});

listing45 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.739510, 
    lng: -73.716122,
    owner_id: 0 
});

listing46 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.691149, 
    lng: -73.943630,
    owner_id: 0 
});

listing47 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.706445, 
    lng: -73.872942,
    owner_id: 0 
});

listing48 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.813901, 
    lng: -73.887426,
    owner_id: 0 
});

listing49 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.868779, 
    lng: -73.893261,
    owner_id: 0 
});

listing50 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.776878, 
    lng: -73.951115,
    owner_id: 0 
});

listing51 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.769569, 
    lng: -73.958888,
    owner_id: 0 
});

listing52 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.706465, 
    lng: -73.917183,
    owner_id: 0 
});

listing53 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.778495, 
    lng: -73.778131,
    owner_id: 0 
});

listing54 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.785106, 
    lng: -73.844109,
    owner_id: 0 
});

listing55 = Listing.create!({
    price: prices.sample,
    beds: rand(2..6), 
    baths: rand(2..6), 
    sqft: rand(900..3000), 
    status: status.sample, 
    address: Faker::Address.street_address, 
    zipcode: zipcodes.sample, 
    realator: realator.sample, 
    style: style.sample,
    description: description.sample, 
    lat: 40.773874, 
    lng: -73.842586,
    owner_id: 0 
});