# == Schema Information
#
# Table name: saves
#
#  id          :bigint           not null, primary key
#  price       :string           not null
#  address     :string           not null
#  beds        :integer          not null
#  baths       :integer          not null
#  status      :string           not null
#  zipcode     :integer          not null
#  realator    :string           not null
#  style       :string           not null
#  description :text             not null
#  sqft        :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Save < ApplicationRecord
    validates :price, :address, :beds, :baths, :status, :zipcode, :realator, :style, :sqft, :description, :lat, :lng, :owner_id, presence: true
end
