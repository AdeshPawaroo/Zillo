@listings.each do |index|
    json.set! listing.id do 
        json.partial! "api/listings/listing", listing: @listing
    end
end