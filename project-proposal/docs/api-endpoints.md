# API Endpoints

## HTML API

### Root

- `GET /`

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Tracks

- `GET /api/tracks`
  - Notes index/search
  - accepts `tag_name` query param to list tracks by tag
  - accepts `user_id` query param to list tracks by user
  - accepts pagination params
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Shares

- `GET /api/shares`
- `POST /api/shares`
- `DELETE /api/shares/:id`

### Likes

- `GET /api/likes`
- `POST /api/likes`
- `DELETE /api/likes/:id`

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `DELETE /api/comments/:id`

### Tags

- `GET /api/tags`
- `POST /api/notes/:note_id/tags`
- `DELETE /api/notes/:note_id/tags/:tag_name`
