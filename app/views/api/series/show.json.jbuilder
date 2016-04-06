json.extract!(
  @series,
  :id, :title, :user, :description
)

json.tracks do
  json.array!(@series.tracks) do |track|
    json.extract!(track, :id, :title, :description, :user, :image)
  end
end
