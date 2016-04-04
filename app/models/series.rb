class Series < ActiveRecord::Base
  belongs_to :user
  has_many :memberships
  has_many :tracks, through: :memberships


  validates :title, :user, presence: true
end
