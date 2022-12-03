import fs from "fs/promises";
import path from "path";

const encrypt = true;

const inputFolder = "in/";
const outputFolder = "out/";

const flatten = async function (arr, result = []) {
	for (let i = 0, length = arr.length; i < length; i++) {
		const value = arr[i];
		if (Array.isArray(value)) {
			flatten(value, result);
		} else {
			result.push(value);
		}
	}
	return result;
};

const loopFiles = async (dir) => {
	const arr = [];
	try {
		const files = await fs.readdir(dir);

		for (const file of files) {
			const filePath = path.join(dir, file);
			const fileStat = fs.stat(filePath);

			if ((await fileStat).isFile()) {
				arr.push(filePath);
			} else if ((await fileStat).isDirectory) {
				arr.push(await loopFiles(filePath));
			}
		}
	} catch (err) {
		console.error(err);
	}

	return arr;
};

const caesarCipherDencrypt = async (letter, den) => {
	const characters = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const cipher = [
		"9",
		"8",
		"7",
		"6",
		"5",
		"4",
		"3",
		"2",
		"1",
		"0",
		"X",
		"Y",
		"Z",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"x",
		"y",
		"z",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
	];
	const check = (element) => element === letter;
	let letterLocation = characters.findIndex(check);

	if (letterLocation === -1) {
		return letter;
	}

	if (letter === " ") {
		return " ";
	}

	let final = den ? cipher[letterLocation] : characters[letterLocation];
	return final;
};

const files = await flatten(await loopFiles(inputFolder));

for (let i = 0; i < files.length; i++) {
	try {
		const fileContent = await fs.readFile(files[i], "utf-8");
		const fileName = path.basename(files[i]);
		let dencryptedFileContent = "";

		for (const letter of fileContent) {
			dencryptedFileContent += await caesarCipherDencrypt(letter, encrypt);
		}

		await fs.writeFile(path.join(outputFolder, fileName), dencryptedFileContent);
	} catch (err) {
		console.error(err);
	}
}
