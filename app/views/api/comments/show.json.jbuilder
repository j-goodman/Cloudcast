json.extract!(
  @comment,
  :id, :body, :seconds
)

json.user do
  json.extract!(@comment.user, :id, :username, :image)
end

json.track do
  json.extract!(@comment.track, :id, :title, :image)
end
