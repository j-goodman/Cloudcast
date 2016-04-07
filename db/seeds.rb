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

lovecraft = User.create!(
  username: 'H. P. Lovecraft',
  password: 'password'
)

erichzann1 = Track.create!(
  title: 'The Music of Erich Zann, Part 1',
  user: lovecraft,
  description: "Part 1 of 3. Read by Cameron Halket for LibriVox. A French university student becomes acquainted with the strange and reclusive musician living on the floor above his own. Gradually he comes to understand that the eldritch quality of the old viol player's music may describe something from a world other than our own. First published in National Amateur, March 1922.",
  image: File.open('app/assets/images/night_window.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Erich_Zann_1.wav?X-Amz-Date=20160407T183644Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=7e2539fe5024de040e4accc61cfde4a625f333e45746788e9a53d34d64afa127&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

jefferson = User.create!(
  username: 'Thomas Jefferson',
  password: 'password'
)

woolf = User.create!(
  username: 'Virginia Woolf',
  password: 'password'
)


jeffersoninaugural = Track.create!(
  title: 'First Inaugural Address',
  user: jefferson,
  description: "Read by M. L. Cohen for LibriVox. Originally delivered in 1801, Jefferson's was the first Inaugural Address delivered in the nation's new capital in Washington. Though he was known more for his skills as a writer than an orator, the speech came to serve as the statement of principles for the newly developing Democratic-Republican party.",
  image: File.open('app/assets/images/declaration.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Jefferson_Inauguration.mp3?X-Amz-Date=20160407T183808Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=3a72ee784e7d3bd8dc7bb50c3cd7662466652c96d8bad3e1b104c58071cca2bc&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

nixon = User.create!(
  username: 'Richard M. Nixon',
  password: 'password'
)

peacewithhonor = Track.create!(
  title: "Peace With Honor",
  user: nixon,
  description: "Speech delivered on January 23, 1973, by President Richard Nixon after the Paris Peace Accord, which ended the Vietnam War. Nixon describes the terms of the treaty, which specified a ceasefire in four days' time, and addresses a promise of his 1968 presidential campaign: ''I pledge to you that we shall have an honorable end to the war in Vietnam.''",
  image: File.open('app/assets/images/peacewithhonor.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Peace_With_Honor.wav?X-Amz-Date=20160407T183924Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=541f65667e2d178d8224cb2c66bf5ee34742f620bbc441172083d7149619c9eb&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

erichzann2 = Track.create!(
  title: 'The Music of Erich Zann, Part 2',
  user: lovecraft,
  description: "Part 2 of 3. Read by Cameron Halket for LibriVox. A French university student becomes acquainted with the strange and reclusive musician living on the floor above his own. Gradually he comes to understand that the eldritch quality of the old viol player's music may describe something from a world other than our own. First published in National Amateur, March 1922.",
  image: File.open('app/assets/images/night_window.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Erich_Zann_2.wav?X-Amz-Date=20160407T183714Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=8e8df42bd94d05afebfbb89f3bb33988b3008ecb328a99695b4c65d5986a036b&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

blueandgreen = Track.create!(
  title: 'Blue and Green',
  user: woolf,
  description: "Read by Andrea L. for LibriVox. A consideration in prose-poetry of perceptions and experiences of color. Published in 1921 as part of the collection Monday or Tuesday.",
  image: File.open('app/assets/images/mondayortuesday.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Blue_and_Green.mp3?X-Amz-Date=20160407T183004Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=3beb9850b2c9e6026982ac893c7784eab2ceccf446edbd42d69e8ccc8c0304fd&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

jfk = User.create!(
  username: 'John F. Kennedy',
  password: 'password'
)

resignation = Track.create!(
  title: "Nixon's Resignation",
  user: nixon,
  description: "Speech delivered on August 9th, 1974, by President Richard Nixon, announcing his resignation from office in the wake of the Watergate scandal. Nixon was the first United States President to resign from the position, and was succeeded -- and later pardoned for any crimes committed while in office -- by his Vice President Gerald Ford.",
  image: File.open('app/assets/images/nixon.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Nixon_Resigns.mp3?X-Amz-Date=20160407T183828Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=038866dfad69dd1650bfc9112969b50ebeeff0210ef87921ca5da20f47c11876&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

ichbineinberliner = Track.create!(
  title: 'Ich Bin Ein Berliner',
  user: jfk,
  description: "Speech delivered in 1963 by President John F. Kennedy in West Berlin during a vist to the city as the guest of Mayor Willy Brandt.",
  image: File.open('app/assets/images/kennedyberlin.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Ich_Bin_Ein_Berliner.mp3?X-Amz-Date=20160407T183750Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=a5e00f9671300f443899882dd91dde3683ac2ef5a1543172036ed0f0af2bfc82&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

erichzann3 = Track.create!(
  title: 'The Music of Erich Zann, Part 3',
  user: lovecraft,
  description: "Part 3 of 3. Read by Cameron Halket for LibriVox. A French university student becomes acquainted with the strange and reclusive musician living on the floor above his own. Gradually he comes to understand that the eldritch quality of the old viol player's music may describe something from a world other than our own. First published in National Amateur, March 1922.",
  image: File.open('app/assets/images/night_window.jpg'),
  audio: 'https://s3.amazonaws.com/cloudcast-dev/audio_seeds/Erich_Zann_3.wav?X-Amz-Date=20160407T183732Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=8dd123007f28a652f2118dfb5c7dc1c96458754fde0c939cf3d20fe4fa7646b2&X-Amz-Credential=ASIAJ4J34JJNICKGEA6A/20160407/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEKf//////////wEaDOiMfJ48bkp8PwvRUSLHAZpYHfRRIqhUIpPYkra8hS8aRhsShoIZ3VK9amDS4ukbeaJM4RdEUQblApz00YiQ/RwnI1iz%2BN%2B00Pps4sgI6Zc/SsuFwkz5IBPNYd6Aq4Wt/V2AgBaHYrrxj2XQgngFW6id8BtyFqTZfI5RvuIU9KnmHk/9h6Y/e9QO9jE4wBSso0AlRUdKrHsi6VOQRhAkhHYDCV0N6SM2pyLfiJ7JQ1p2IbC4cqhf6zzg6ITgXLzGjM3gZRvj9V192PdfwxAhz16vf0eNik8o/cqZuAU%3D'
)

erichzannseries = Series.create!(
  title: 'The Music of Erich Zann',
  user: lovecraft,
  description: "Read by Cameron Halket for LibriVox. A university student in an unnamed French city becomes acquainted with the strange and reclusive musician living on the floor above his own. Gradually he comes to understand that the eldritch quality of the old viol player's music may describe something from a world other than our own. First published in National Amateur, March 1922.",
)

Membership.create!(
  track: erichzann1,
  series: erichzannseries,
  order: 0
)

Membership.create!(
  track: erichzann2,
  series: erichzannseries,
  order: 1
)

Membership.create!(
  track: erichzann3,
  series: erichzannseries,
  order: 2
)

presidentialspeeches = Series.create!(
  title: 'Presidents',
  user: nixon,
  description: "Speeches delivered by United States Presidents.",
)

Membership.create!(
  track: jeffersoninaugural,
  series: presidentialspeeches,
  order: 0
)

Membership.create!(
  track: ichbineinberliner,
  series: presidentialspeeches,
  order: 1
)

Membership.create!(
  track: peacewithhonor,
  series: presidentialspeeches,
  order: 2
)

Membership.create!(
  track: resignation,
  series: presidentialspeeches,
  order: 3
)


# johnson = User.create!(
#   username: 'Robert Johnson',
#   password: 'surfbort'
# )
#
# marty = User.create!(
#   username: 'Marty McFly',
#   password: 'surfbort'
# )
#
# apu = User.create!(
#   username: 'Apu de Beaumarchais',
#   password: 'surfbort'
# )
#
# dooku = User.create!(
#   username: 'Count Dooku',
#   password: 'surfbort'
# )
#
# byrne = User.create!(
#   username: 'David Byrne',
#   password: 'surfbort'
# )
#
# crossroadblues = Track.create!(
#   title: 'Crossroad Blues',
#   user: johnson,
#   description: 'Standing at the crossroads, I tried to flag a ride.',
#   image: File.open('app/assets/images/rjohnson.png'),
#   audio: File.open('app/assets/sounds/welcome.wav')
# )
#
# johnnybgoode = Track.create!(
#   title: 'Johnny B. Goode',
#   user: marty,
#   description: "This one's an oldie. Or at least it's an oldie where I come from.",
#   image: File.open('app/assets/images/michael-j-fox.jpg')
# )
#
# babyonboard = Track.create!(
#   title: 'Baby on Board',
#   user: apu,
#   description: "Thank you, come again.",
#   image: File.open('app/assets/images/besharps.jpg')
# )
#
# deadshrimpblues = Track.create!(
#   title: 'Dead Shrimp Blues',
#   user: johnson,
#   description: 'All my shrimp was dead and gone.',
#   image: File.open('app/assets/images/rjohnson.png')
# )
#
# onceinalifetime = Track.create!(
#   title: 'Once in a Lifetime',
#   user: byrne,
#   description: 'You may find yourself living in a shotgun shack.',
#   image: File.open('app/assets/images/talkingheads.jpg')
# )
#
# Track.create!(
# 	title: "You've fought bravely, Master Windu",
# 	user: dooku,
# 	description: 'Worthy of recognition in the archives of the Jedi order.',
#   image: File.open('app/assets/images/arena.jpg')
# )
#
# psychokiller = Track.create!(
#   title: 'Psycho Killer',
#   user: byrne,
#   description: "You're talking a lot but you're not saying anything.",
#   image: File.open('app/assets/images/talkingheads.jpg')
# )
#
# papalegba = Track.create!(
#   title: 'Papa Legba',
#   user: byrne,
#   description: "Rompiendo la monotonia del tiempo.",
#   image: File.open('app/assets/images/talkingheads.jpg')
# )
#
# talkingheads = Series.create!(
#   title: 'Talking Heads',
#   user: byrne,
#   description: "Summer of Talking Heads!",
# )
#
# Membership.create!(
#   track: onceinalifetime,
#   series: talkingheads,
#   order: 0
# )
#
# Membership.create!(
#   track: psychokiller,
#   series: talkingheads,
#   order: 1
# )
#
# Membership.create!(
#   track: papalegba,
#   series: talkingheads,
#   order: 2
# )
#
# eightyeightmph = Series.create!(
#   title: '88 MPH',
#   user: marty,
#   description: "For the tape deck in the DeLorean.",
# )
#
# Membership.create!(
#   track: johnnybgoode,
#   series: eightyeightmph,
#   order: 0
# )
#
# Membership.create!(
#   track: onceinalifetime,
#   series: eightyeightmph,
#   order: 2
# )
#
# Membership.create!(
#   track: crossroadblues,
#   series: eightyeightmph,
#   order: 1
# )
#
# Membership.create!(
#   track: psychokiller,
#   series: eightyeightmph,
#   order: 3
# )
#
# Membership.create!(
#   track: deadshrimpblues,
#   series: eightyeightmph,
#   order: 4
# )
#
# Membership.create!(
#   track: papalegba,
#   series: eightyeightmph,
#   order: 5
# )
#
# Membership.create!(
#   track: babyonboard,
#   series: eightyeightmph,
#   order: 6
# )
#
# atthecrossroads = Series.create!(
#   title: 'Standing at the Crossroads',
#   user: johnson,
#   description: "You know that new sound you been looking for? Well listen to this!",
# )
#
# Membership.create!(
#   track: deadshrimpblues,
#   series: atthecrossroads,
#   order: 0
# )
#
# Membership.create!(
#   track: johnnybgoode,
#   series: atthecrossroads,
#   order: 2
# )
#
# Membership.create!(
#   track: crossroadblues,
#   series: atthecrossroads,
#   order: 3
# )
#
# Membership.create!(
#   track: papalegba,
#   series: atthecrossroads,
#   order: 1
# )
