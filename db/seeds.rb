# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Track.destroy_all
Series.destroy_all
Membership.destroy_all

johnson = User.create!(
  username: 'Robert Johnson',
  password: 'surfbort'
)

marty = User.create!(
  username: 'Marty McFly',
  password: 'surfbort'
)

apu = User.create!(
  username: 'Apu de Beaumarchais',
  password: 'surfbort'
)

dooku = User.create!(
  username: 'Count Dooku',
  password: 'surfbort'
)

byrne = User.create!(
  username: 'David Byrne',
  password: 'surfbort'
)

crossroadblues = Track.create!(
  title: 'Crossroad Blues',
  user: johnson,
  description: 'Standing at the crossroads, I tried to flag a ride.',
  image: File.open('app/assets/images/rjohnson.png')
)

johnnybgoode = Track.create!(
  title: 'Johnny B. Goode',
  user: marty,
  description: "This one's an oldie. Or at least it's an oldie where I come from.",
  image: File.open('app/assets/images/michael-j-fox.jpg')
)

babyonboard = Track.create!(
  title: 'Baby on Board',
  user: apu,
  description: "Thank you, come again.",
  image: File.open('app/assets/images/besharps.jpg')
)

deadshrimpblues = Track.create!(
  title: 'Dead Shrimp Blues',
  user: johnson,
  description: 'All my shrimp was dead and gone.',
  image: File.open('app/assets/images/rjohnson.png')
)

onceinalifetime = Track.create!(
  title: 'Once in a Lifetime',
  user: byrne,
  description: 'You may find yourself living in a shotgun shack.',
  image: File.open('app/assets/images/talkingheads.jpg')
)

Track.create!(
	title: "You've fought bravely, Master Windu",
	user: dooku,
	description: 'Worthy of recognition in the archives of the Jedi order.',
  image: File.open('app/assets/images/arena.jpg')
)

psychokiller = Track.create!(
  title: 'Psycho Killer',
  user: byrne,
  description: "You're talking a lot but you're not saying anything.",
  image: File.open('app/assets/images/talkingheads.jpg')
)

papalegba = Track.create!(
  title: 'Papa Legba',
  user: byrne,
  description: "Rompiendo la monotonia del tiempo.",
  image: File.open('app/assets/images/talkingheads.jpg')
)

talkingheads = Series.create!(
  title: 'Talking Heads',
  user: byrne,
  description: "Summer of Talking Heads!",
)

Membership.create!(
  track: onceinalifetime,
  series: talkingheads,
  order: 0
)

Membership.create!(
  track: psychokiller,
  series: talkingheads,
  order: 1
)

Membership.create!(
  track: papalegba,
  series: talkingheads,
  order: 2
)

eightyeightmph = Series.create!(
  title: '88 MPH',
  user: marty,
  description: "For the tape deck in the DeLorean.",
)

Membership.create!(
  track: johnnybgoode,
  series: eightyeightmph,
  order: 0
)

Membership.create!(
  track: onceinalifetime,
  series: eightyeightmph,
  order: 2
)

Membership.create!(
  track: crossroadblues,
  series: eightyeightmph,
  order: 1
)

Membership.create!(
  track: psychokiller,
  series: eightyeightmph,
  order: 3
)

Membership.create!(
  track: deadshrimpblues,
  series: eightyeightmph,
  order: 4
)

Membership.create!(
  track: papalegba,
  series: eightyeightmph,
  order: 5
)

Membership.create!(
  track: babyonboard,
  series: eightyeightmph,
  order: 6
)

atthecrossroads = Series.create!(
  title: 'Standing at the Crossroads',
  user: johnson,
  description: "You know that new sound you been looking for? Well listen to this!",
)

Membership.create!(
  track: deadshrimpblues,
  series: atthecrossroads,
  order: 0
)

Membership.create!(
  track: johnnybgoode,
  series: atthecrossroads,
  order: 2
)

Membership.create!(
  track: crossroadblues,
  series: atthecrossroads,
  order: 3
)

Membership.create!(
  track: papalegba,
  series: atthecrossroads,
  order: 1
)
