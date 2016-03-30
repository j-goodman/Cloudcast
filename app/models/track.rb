class Track < ActiveRecord::Base
  belongs_to :user
  validates :title, :file_url, :user, presence: true
end
