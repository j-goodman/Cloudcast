# Cloudcast

[Cloudcast][cloudcast]

[cloudcast]: http://cloud-cast.herokuapp.com

## Features:

Cloudcast is a service for uploading and sharing podcasts. It allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an Account
- [ ] Sign in and Sign out
- [ ] Upload sound files with titles and descriptions

![index](http://s3.amazonaws.com/imgir-pro/images/imgs/000/000/108/original/Screen_Shot_2016-04-11_at_14.44.30.png?1460400532)

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

![track](http://i.imgur.com/oEVKtbJ.png)

## Functionality

Cloudcast is a single page app built using the React-Flux framework. On navigating to the site the user first lands at the Track Index component, which is nested inside the omnipresent Navbar component. From the Navbar, the user can bring up modal windows to sign in, create an account, or -- if signed in -- upload a new track. From the Track Index, they can either play tracks directly or navigate to a user's detail page, or a track's detail page, both of which are also equipped to be able to play audio.

![user](http://i.imgur.com/IAvYLyb.png)

## To-do

- [ ] Finish implementing Series: when creating a track the user is given the option to include it in one of their Series or to make a new one.
- [ ] Make tracks editable.
- [ ] Optimize sound loading to reduce buffering time.
