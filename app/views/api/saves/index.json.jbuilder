@saves.each do |save|
    json.set! save.id do 
        json.extract! save, :price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id
    end
end 