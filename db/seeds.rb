# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

johnson = User.create(
  username: 'Robert Johnson',
  password: 'surfbort'
)

marty = User.create(
  username: 'Marty McFly',
  password: 'surfbort'
)

apu = User.create(
  username: 'Apu de Beaumarchais',
  password: 'surfbort'
)

dooku = User.create(
  username: 'Count Dooku',
  password: 'surfbort'
)

byrne = User.create(
  username: 'David Byrne',
  password: 'surfbort'
)

Track.create(
  title: 'Crossroad Blues',
  file_url: 'django.wav',
  user: johnson,
  description: 'Standing at the crossroads, I tried to flag a ride.',
  image_url: 'http://www.dafont.com/forum/attach/orig/5/5/551494.jpg'
)

Track.create(
title: 'Johnny B. Goode',
file_url: 'django.wav',
user: marty,
description: "This one's an oldie. Or at least it's an oldie where I come from.",
image_url: 'http://www.dafont.com/forum/attach/orig/5/5/551494.jpg'
)

Track.create(
title: 'Baby on Board',
file_url: 'django.wav',
user: apu,
description: "Thank you, come again.",
image_url: 'https://i.imgur.com/G5RZH.jpg'
)

Track.create(
  title: 'Dead Shrimp Blues',
  file_url: 'django.wav',
  user: johnson,
  description: 'All my shrimp was dead and gone.',
  image_url: 'http://www.dafont.com/forum/attach/orig/5/5/551494.jpg'
)

Track.create(
  title: 'Once in a Lifetime',
  file_url: 'django.wav',
  user: byrne,
  description: 'You may find yourself living in a shotgun shack.',
  image_url: 'https://hackskeptic.files.wordpress.com/2016/02/talking.jpg'
)

Track.create(
	title: "You've fought bravely, Master Windu",
	file_url: 'django.wav',
	user: dooku,
	description: 'Worthy of recognition in the archives of the Jedi order.',
	image_url: 'https://rborg42.files.wordpress.com/2013/05/gunshiparena4.png'
)

Track.create(
  title: 'Psycho Killer',
  file_url: 'django.wav',
  user: byrne,
  description: "You're talking a lot but you're not saying anything.",
  image_url: 'https://hackskeptic.files.wordpress.com/2016/02/talking.jpg'
)
