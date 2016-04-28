json.extract!(
  @user,
  :id, :username, :series, :image
)

json.tracks do
  json.array!(@user.tracks) do |track|
    json.extract!(track, :id, :title, :description, :audio, :image, :likes, :comments)

    json.comments do
      json.array!(track.comments) do |comment|
        json.extract!(comment, :id)
        json.extract!(comment.user, :username, :image)
      end
    end

    json.likes do
      json.array!(track.likes) do |like|
        json.extract!(like, :id)
        json.extract!(like.user, :username)
      end
    end

    json.user do
      json.extract!(track.user, :id, :username, :image)
    end
  end
end
