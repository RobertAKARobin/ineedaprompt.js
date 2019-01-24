const output = {
	prepositions: [
		'to',
		'by',
		'over',
		'as',
		'with'
	],
	dictionary: {
		adj: [
			'aggressive',
			'bloated',
			'creepy',
			'evil',
			'nasty',
			'obnoxious'
		],
		noun: [
			'actor',
			'baritone',
			'chef',
			'elf',
			'ninja warrior',
			'Oompa Loompa'
		],
		adverb: [
			'aggressively',
			'belatedly',
			'creepily',
			'enthusiastically',
			'noisily',
			'obnoxiously'
		],
		verb: [
			'applying sunscreen to',
			'being held hostage by',
			'crying over',
			'eating',
			'Netflix-and-chilling with',
			'on fire with'
		]
	}
}
const permutations = []
const wordTypes = Object.keys(output.dictionary)
const combos = combinations(wordTypes, 1, 6).map(combo=>combo.join(' ')).sort().join('\n')
console.log(combos)

function combinations(array, minLength, maxLength){
	const output = []
	permutate()
	return output

	function permutate(prefix = []){
		array.forEach(item=>{
			const variant = prefix.slice()
			variant.push(item)
			if(variant.length >= minLength && variant.length <= maxLength){
				output.push(variant)
			}
			if(variant.length < maxLength){
				permutate(variant)
			}
		})
	}
}
