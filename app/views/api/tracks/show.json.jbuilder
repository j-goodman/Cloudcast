json.extract!(
  @track,
  :id, :title, :description, :image, :audio, :comments
)

json.user do
  json.extract!(@track.user, :id, :username, :image)
end

json.comments do
  json.array!(@track.comments) do |comment|
    json.extract!(comment, :id, :body, :seconds)
    json.extract!(comment.user, :username, :image)
  end
end
