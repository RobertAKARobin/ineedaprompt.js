const DICT = {
	adj: [
		['aggressive', 'aggressively'],
		'bloated',
		['creepy', 'creepily'],
		'evil',
		['nasty', 'nastily'],
		['obnoxious', 'obnoxiously']
		['polite', 'politely'],
		['quick', 'quickly']
	],
	noun: [
		'actor',
		'baritone',
		'chef',
		'elf',
		'ninja warrior',
		'Oompa Loompa'
	],
	adverb: [],
	verb: [
		'applying sunscreen to',
		'being held hostage by',
		'crying over',
		'eating',
		'Netflix-and-chilling with',
		'on fire with'
	],
	preopositions: [
		'to',
		'by',
		'over',
		'as',
		'with'
	]
}

const matches = [
	'adj',
	'Aggressive.',

	(2).times('adj'),
	'Aggressive and bloated.',

	(3).times('adj'),
	'Aggressive, bloated, and creepy',

	(4).times('adj'),
	'Aggressive, bloated, creepy, and evil.',

	'noun',
	'An actor.',

	(2).times('noun'),
	'An actor and a baritone.',

	(3).times('noun'),
	'An actor, a baritone, and a chef.',

	(4).times('noun'),
	'An actor, a baritone, a chef, and an elf.',

	'verb',
	'Applying sunscreen.',

	(2).times('verb'),
	'Applying sunscreen and being held hostage.',

	(3).times('verb'),
	'Applying sunscreen, being held hostage, and crying.',

	(4).times('verb'),
	'Applying sunscreen, being held hostage, crying, and eating.',

	'adverb',
	'Aggressively.',

	(2).times('adverb'),
	'Aggressively and creepily.',

	(3).times('adverb'),
	'Aggressively, creepily, and nastily.',

	(4).times('adverb'),
	'Aggressively, creepily, nastily, and messily.',

	'adj noun',
	'An aggressive actor.',

	(2).times('adj noun'),
	'An aggressive actor and a bloated baritone.',

	(3).times('adj noun'),
	'An aggressive actor, a bloated baritone, and a creepy chef.',

	(4).times('adj noun'),
	'An aggressive actor, a bloated baritone, a creepy chef, and an evil elf.',

	'adj noun adj adj noun',
	'An aggressive actor and a bloated, creepy baritone.',

	'adj adj noun adj adj noun',
	'An aggressive, bloated actor and a creepy, evil baritone.',

	'adj adj adj noun adj noun',
	'An aggressive, bloated, creepy actor and an evil baritone.',

	'adj noun verb',
	'An aggressive actor who is applying sunscreen.',

	'adj noun verb adj',
	'An aggressive actor who is applying sunscreen and bloated.',

	'adj noun verb adj noun',
	'An aggressive actor who is applying sunscreen to a bloated baritone.',

	'adj noun verb adj noun verb',
	'An aggressive actor who is applying sunscreen to a bloated baritone who is being held hostage.',

	'adj noun verb adj noun verb noun',
	'An aggressive actor who is applying sunscreen to a bloated baritone who is being held hostage by a creepy chef.',

	'adj noun verb verb',
	'An aggressive actor who is applying sunscreen and being held hostage.',

	'adj noun verb verb noun',
	'An aggressive actor who is applying sunscreen and being held hostage by a baritone.',

	'adj noun verb verb verb noun',
	'An aggressive actor who is applying suncreen, being held hostage, and crying over a baritone.'
]
