# Schema Information

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
file_url    | string    | not null
image_url   | string    |
user_id     | integer   | not null, foreign key (references users), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key (references track), indexed
seconds     | integer   | not null
body        | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references track), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followed_id | integer   | not null, foreign key (references user), indexed
follower_id | integer   | not null, foreign key (references user), indexed

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      |
user_id     | integer   | not null, foreign key (references user), indexed

## playlist_memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references track), indexed
playlist_id | integer   | not null, foreign key (references playlist), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
avatar_url      | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
