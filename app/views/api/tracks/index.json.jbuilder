json.array!(@tracks) do |track|
  json.extract!(
    track,
    :id, :title, :description, :file_url, :user, :image_url
  )
end
