class Membership < ActiveRecord::Base
  belongs_to :series
  belongs_to :track

  validates :track, :series, presence: true
end
