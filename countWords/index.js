import fs from "fs/promises";
import path from "path";

const inputFolder = "input/";
const showWords = false;

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

const files = await flatten(await loopFiles(inputFolder));

for (let i = 0; i < files.length; i++) {
	try {
		const fileContent = await fs.readFile(files[i], "utf-8");
		const fileName = path.basename(files[i]);
        const filtered = fileContent.trim().match(/\w+|"[^"]+"/g);
        
        if (showWords) {
            console.log(`${fileName}: ${ filtered.length } | ${ filtered.toString().replace(/\W/g, ", ") }`);
        } else {
            console.log(`${fileName}: ${ filtered.length }`);
        }

	} catch (err) {
		console.error(err);
	}
}