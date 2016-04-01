# Cloudcast

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product:

Cloudcast is a service for uploading and sharing podcasts, as well as following and interacting with podcasters. It allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an Account
- [ ] Sign in and Sign out
- [ ] Upload and edit sound files with titles and descriptions
- [ ] Share podcasts on their own Stream
- [ ] Like podcasts and make timeline-bound comments
- [ ] Create and edit playlists
- [ ] Track their followers and commenters
- [ ] View sound files as waveforms

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./project-docs/docs/views.md
[components]: ./project-docs/docs/components.md
[stores]: ./project-docs/docs/stores.md
[api-endpoints]: ./project-docs/docs/api-endpoints.md
[schema]: ./project-docs/docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Tracks Model, API, and basic APIUtil (1.5 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

- [ ] create `Track` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for tracks (`TracksController`)
- [ ] jBuilder views for tracks
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Tracks can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each track component, building out the flux loop as needed.
  - [ ] `TracksIndex`
  - [ ] `TrackIndexItem`
  - [ ] `TrackForm`

### Phase 4: Likes and Comments (1 day)
- [ ] create `Like` and `Comment` models (identical except that Comments
  include body text as one of their elements)
- build out API, Flux loop, and components for:
  - [ ] like and Comment CRUD
  - [ ] removing Likes or Comments
  - [ ] editing Comments
- Use CSS to style new elements

### Phase 5: Playlists and Follows (1 day)

**Objective:** Tracks belong to Playlists, and can be viewed by playlist.

- [ ] create `Playlist` model
- build out API, Flux loop, and components for:
  - [ ] Playlist CRUD
  - [ ] moving tracks to a different playlist
  - [ ] viewing tracks by playlist
- Use CSS to style new views

- [ ] create `Following` model
- build out API, Flux loop, and components for:
  - [ ] Following CRUD
  - [ ] adding and removing followings.
- Use CSS to style new views

Phase 3 adds organization to the Tracks and broadens User interaction with follows. Tracks belong to a Playlist,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Tracks can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for playlist
  - [ ] adding tags to playlist
  - [ ] creating tags while adding to playlists
  - [ ] searching playlists by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Tracks (0.5 days)

**objective:** Enable complex styling of tracks.

- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
