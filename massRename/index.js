import fs from "fs/promises";
import path from "path";

const renameTo = "fsle"
const inFolder = "input/"

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

const files = await flatten(await loopFiles(inFolder));

for (let i = 0; i < files.length; i++) {
    const file = files[i];
    fs.rename(file, `${inFolder}${renameTo}-${i}${path.extname(file)}`)
}