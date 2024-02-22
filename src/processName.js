//@ts-check

/**
 * @param {string} name 
 * @returns {string}
 */
module.exports.processName = function processName(name) {
	name = name.toLowerCase();
	name = cutLeadingConsonant(name);
	name = softenLeadingVowel(name);	
	return "Ху" + name;
}

const hardVowels = ['а', 'о', 'у', 'ы', 'э'];
const softVowels = [ 'е', 'ё', 'и', 'ю', 'я'];
const consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];

/** @type Record<(typeof softVowels)[number], (typeof hardVowels)[number]>*/
const softeningMap = {
	'а': 'я', 
	'о': 'ё', 
	'у': 'ю', 
	'ы': 'и', 
	'э': 'е',
};

/**
 * @param {string} str 
 * @returns {string}
 */
function cutLeadingConsonant(str) {
	const fistNonConsonantIndex = str.split('').findIndex((char) => !consonants.includes(char));
	return str.substring(fistNonConsonantIndex);
}

/**
 * @param {string} str 
 * @returns {string}
 */
function softenLeadingVowel(str) {
	const softVowel = softeningMap[str[0]];
	if (!softVowel) {
		return str;
	}
	return softVowel + str.substring(1);
}
