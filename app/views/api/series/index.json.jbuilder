json.array!(@series) do |series|
  json.extract!(
    series,
    :id, :title, :description, :tracks
  )
end
