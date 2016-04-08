json.extract!(
  @user,
  :id, :username, :series, :image
)

json.tracks do
  json.array!(@user.tracks) do |track|
    json.extract!(track, :id, :title, :description, :audio, :image)

    json.user do
      json.extract!(track.user, :id, :username, :image)
    end
  end
end
