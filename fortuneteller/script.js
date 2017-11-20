function copyText() {
    document.getElementById('reading').innerHTML = "reading..."
}

var fortunes = [
	'You find beauty in ordinary things, do not lose this ability.',
	'Plan for many pleasures ahead.',
	'It takes more than good memory to have good memories.',
	'Something you lost will soon turn up.',
	'A pleasant surprise is in store for you',
	'Your many hidden talents will become obvious to those around you.',
	'Look for new outlets for your own creative abilities.',
	'Good luck is the result of good planning.',
	'Your everlasting patience will be rewarded sooner or later.',
	'You will take a chance in something in the near future.',
	'You will live a long, happy life.',
	'You will step on the soil of many countries.',
	'Nature, time and patience are the three best physicians.'
]

function newFortune() {
	var randomNumber = Math.floor(Math.random() * (fortunes.length))
	document.getElementById('fortuneDisplay').innerHTML = fortunes[randomNumber];
}