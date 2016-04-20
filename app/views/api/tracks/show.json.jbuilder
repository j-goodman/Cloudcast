json.extract!(
  @track,
  :id, :title, :description, :image, :audio, :comments
)

json.user do
  json.extract!(@track.user, :id, :username, :image)
end

json.comments do
  json.array!(@track.comments) do |comment|
    json.extract!(comment, :id, :body, :seconds, :user_id)
    json.extract!(comment.user, :username, :image)
  end
end

json.likes do
  json.array!(@track.likes) do |like|
    json.extract!(like, :id, :user_id)
    json.extract!(like.user, :username, :image)
  end
end
