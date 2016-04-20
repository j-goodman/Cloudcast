class Comment < ActiveRecord::Base
  validates :body, length: { maximum: 120 }

  belongs_to :user
  belongs_to :track
  has_one(
    :recipient,
    through: :track,
    source: :user
  )

  validates :user, :track, presence: true
end
