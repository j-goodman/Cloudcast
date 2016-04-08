json.extract!(
  @user,
  :id, :username, :series
)

json.tracks do
  json.array!(@user.tracks) do |track|
    json.extract!(track, :id, :title, :description, :user, :audio, :image)
  end
end
