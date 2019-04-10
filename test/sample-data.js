const prepositions = [
		'to',
		'by',
		'over',
		'as',
		'with'
]
const dictionary = {
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
const permutations = []
const wordTypes = Object.keys(dictionary)
const combos = combinations(wordTypes, 1, 6)
console.log(combos)

function combinations(components, minLength, maxLength){
	const completedCombos = []
	addCombinations([])
	return completedCombos

	function addCombinations(firstComponentsInCombo = []){
		components.forEach(component=>{
			const combo = Array.from(firstComponentsInCombo)
			combo.push(component)
			if(combo.length >= minLength && combo.length <= maxLength){
				completedCombos.push(combo)
			}
			if(combo.length < maxLength){
				addCombinations(combo)
			}
		})
	}
}

function prompt(wordTypeList){
	const prompt = {
		wordTypeList
	}

	prompt.words = prompt.wordTypeList.map(wordType=>{
		return {
			type: wordType,
			word: dictionary[wordType][Math.floor(Math.random() * dictionary[wordType].length)],
			phraseType: (['adj', 'noun'].includes(wordType) ? 'noun' : 'verb'),
			start: '',
			end: ''
		}
	})

	prompt.phrases = prompt.words.reduce((phrases, word, index, words)=>{
		const prevWord = words[index - 1]
		const currentPhrase = phrases[phrases.length - 1]
		if(!prevWord || prevWord.phraseType !== word.phraseType){
			phrases.push({
				type: word.phraseType,
				words: [word]
			})
		}else{
			currentPhrase.words.push(word)
		}
		return phrases
	}, [])

	prompt.phrases.forEach((phrase, phraseIndex)=>{
		const words = phrase.words
		words.forEach((word, wordIndex)=>{
			const prevWord = (words[wordIndex - 1] || {})
			const nextWord = (words[wordIndex + 1] || {})
			const wordAfterNext = (words[wordIndex + 2] || {})
			if(word.type === nextWord.type){
				if(word.type === wordAfterNext.type || prevWord.type === word.type){
					word.end += ','
				}
				if(word.type !== wordAfterNext.type){
					word.end += ' and'
				}
			}
		})
	})

	return prompt
}
