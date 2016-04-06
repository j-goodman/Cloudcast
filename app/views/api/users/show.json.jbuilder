json.extract!(
  @user,
  :id, :username, :series
)

json.tracks do
  json.array!(@user.tracks) do |track|
    json.extract!(track, :id, :title, :description, :user, :image)
  end
end
