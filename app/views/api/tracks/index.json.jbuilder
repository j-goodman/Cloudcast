json.array!(@tracks) do |track|
  json.extract!(
    track,
    :id, :title, :description, :created_at, :image, :audio
  )

  json.user do
    json.extract!(track.user, :id, :username, :image)
  end
end
