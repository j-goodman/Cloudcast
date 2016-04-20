json.array!(@comments) do |comment|
  json.extract!(
    comment,
    :id, :body, :seconds
  )
  json.user do
    json.extract!(comment.user, :id, :username, :image)
  end
  json.track do
    json.extract!(comment.track, :id, :title, :image)
    json.user do
      json.extract!(comment.track.user, :id, :username, :image)
    end
  end
end
