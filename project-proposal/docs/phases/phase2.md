# Phase 2: Flux Architecture and Track CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* TracksIndex
  - TracksIndexItem
* TrackForm

### Stores
* Track

### Actions
* ApiActions.receiveAllTracks -> triggered by ApiUtil
* ApiActions.receiveSingleTrack
* ApiActions.deleteTrack
* TrackActions.fetchAllTracks -> triggers ApiUtil
* TrackActions.fetchSingleTrack
* TrackActions.createTrack
* TrackActions.editTrack
* TrackActions.destroyTrack

### ApiUtil
* ApiUtil.fetchAllTracks
* ApiUtil.fetchSingleTrack
* ApiUtil.createTrack
* ApiUtil.editTrack
* ApiUtil.destroyTrack

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
