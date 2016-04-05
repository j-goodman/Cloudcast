json.array!(@series) do |series|
  json.extract!(
    series,
    :id, :title, :user, :description, :tracks
  )
end
