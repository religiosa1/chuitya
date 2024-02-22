//@ts-check
const { describe, it } = require("node:test");
const { strict: assert } = require("node:assert");
const { processName } = require("../processName");

describe("processName", () => {
	it("strips out a single leading consonant", () => {
		const result = processName("Петя");
		assert.strictEqual(result, "Хуетя");
	});

	it("strips out multiple leading consonants", () => {
		const result = processName("Владимир");
		assert.strictEqual(result, "Хуядимир");
	});

	it("keeps the followed 'soft' vowel without change", () => {
		const result1 = processName("Лёха");
		assert.strictEqual(result1, "Хуёха");
	});

	it("transforms a name with single leading consonant, followed by И", () => {
		const result = processName("Витя");
		assert.strictEqual(result, "Хуитя");
	});	

	it("transforms a name with a leading 'hard' vowel", () => {
		const result = processName("Аня");
		assert.strictEqual(result, "Хуяня");
	});

	it("transforms a name with double И", () => {
		const result = processName("Наташа");
		assert.strictEqual(result, "Хуяташа");
	});
});