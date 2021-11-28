# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  price       :integer          not null
#  address     :string           not null
#  beds        :integer          not null
#  baths       :integer          not null
#  status      :string           not null
#  zipcode     :integer          not null
#  realator    :string           not null
#  style       :string           not null
#  description :text             not null
#  state_id    :integer          not null
#  city_id     :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Listing < ApplicationRecord
    
end
