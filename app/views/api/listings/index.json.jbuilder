@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id
        json.photoUrl url_for(listing.image) if listing.image.attached?
    end
end