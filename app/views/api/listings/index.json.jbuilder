@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id
    end
end