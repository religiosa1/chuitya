#!/usr/bin/env node
//@ts-check
const readlinePromises = require('node:readline/promises');
const { processName } = require("./processName");

async function main() {
	const rl = readlinePromises.createInterface({
		input: process.stdin,
		output: process.stdout,
	}); 
	const name = await rl.question('Как вас зовут?\n');
	const procesedName = processName(name);

	console.log(procesedName);
	process.exit(0);
}
main();
