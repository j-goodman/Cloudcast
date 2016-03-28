# Phase 5: Following and Garbage Collection

## Rails
### Models
* Follow

### Controllers
* Api::FollowsController (create, destroy, index, show, update)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)
* FollowsIndex
  - FollowIndexItem
* FollowShow
* FollowForm

### Stores
* Follow

### Actions
* ApiActions.receiveAllFollows -> triggered by ApiUtil
* ApiActions.receiveSingleFollow
* ApiActions.deleteFollow
* FollowActions.fetchAllFollows -> triggers ApiUtil
* FollowActions.fetchSingleFollow
* FollowActions.createFollow
* FollowActions.updateFollow
* FollowActions.destroyFollow

### ApiUtil
* ApiUtil.fetchAllFollows
* ApiUtil.fetchSingleFollow
* ApiUtil.createFollow
* ApiUtil.updateFollow
* ApiUtil.destroyFollow

## Gems/Libraries
