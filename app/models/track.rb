class Track < ActiveRecord::Base
  belongs_to :user
  has_many :memberships
  has_many :series, through: :memberships

  validates :title, :file_url, :user, presence: true
end
