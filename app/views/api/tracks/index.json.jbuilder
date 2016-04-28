json.array!(@tracks) do |track|
  json.extract!(
    track,
    :id, :title, :description, :created_at, :image, :audio
  )

  json.user do
    json.extract!(track.user, :id, :username, :image)
  end

  json.comments do
    json.array!(track.comments) do |comment|
      json.extract!(comment, :id)
      json.extract!(comment.user, :username, :image)
    end
  end

  json.likes do
    json.array!(track.likes) do |comment|
      json.extract!(comment, :user_id)
      json.extract!(comment.user, :username, :id, :image)
    end
  end
end
