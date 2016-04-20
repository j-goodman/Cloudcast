class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :track
  has_one(
    :recipient,
    through: :track,
    source: :user
  )

  validates :user, :track, presence: true
end
