# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  beds        :integer          not null
#  baths       :integer          not null
#  status      :string           not null
#  zipcode     :integer          not null
#  realator    :string           not null
#  style       :string           not null
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  sqft        :integer          not null
#  price       :string           not null
#  owner_id    :integer          not null
#
class Listing < ApplicationRecord
    validates :price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id, presence: true

    has_one_attached :image
end
