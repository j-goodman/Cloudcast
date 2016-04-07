class Track < ActiveRecord::Base
  belongs_to :user
  has_many :memberships
  has_many :series, through: :memberships
  has_attached_file :image, default_url: "/app/assets/images/agents_of_fortune.jpg"
  has_attached_file :audio, default_utl: "audio_missing.wav"

  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates :title, :user, presence: true
end
