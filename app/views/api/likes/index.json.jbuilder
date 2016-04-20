json.array!(@likes) do |like|
  json.extract!(
    like,
    :id
  )
  json.user do
    json.extract!(like.user, :id, :username, :image)
  end
  json.track do
    json.extract!(like.track, :id, :title, :image)
    json.user do
      json.extract!(like.track.user, :id, :username, :image)
    end
  end
end
