# Flux Stores

### TrackStore

Holds all persisted track data.

##### Actions:
- `receiveAllTracks`
- `receiveSingleTrack`
- `removeTrack`

##### Listeners:
- `TracksIndex` (passes to `TrackIndexItem` via props)
- `TrackDetail`

### TrackFormStore

Holds un-persisted track data to send to the API.

##### Actions:
- `receiveTrackFormParams`

##### Listeners:
- `TrackForm`

### PlaylistStore

Holds all persisted playlist data.

##### Actions:
- `receiveAllPlaylists`
- `receiveSinglePlaylist`
- `removePlaylist`

##### Listeners:
- `PlaylistIndex`

### PlaylistFormStore

Holds un-persisted playlist data to send to the API.

##### Actions:
- `receivePlaylistFormParams`

##### Listeners:
- `PlaylistForm`

### CommentStore

Holds all persisted comment data.

##### Actions:
- `receiveAllComments`
- `receiveSingleComment`
- `removeComment`

##### Listeners:
- `CommentIndex`

### LikeStore

Holds all persisted like data.

##### Actions:
- `receiveAllLikes`
- `receiveSingleLike`
- `removeLike`

##### Listeners:
- `LikeIndex`

### TagStore

Holds all persisted tag data.

##### Actions:
- `receiveAllTags`
- `receiveSingleTag`
- `removeTag`

##### Listeners:
- `TagIndex`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
