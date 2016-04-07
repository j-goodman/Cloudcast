json.array!(@tracks) do |track|
  json.extract!(
    track,
    :id, :title, :description, :image, :audio, :user
  )
end
