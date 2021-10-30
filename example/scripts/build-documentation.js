const fs = require('fs/promises');
const path = require('path');

/*
  # Steps
    1. Read the README.md.
    2. Write it to documentation.md
    
*/

const getReadmeContent = async () => {
	const content = await fs.readFile(
		path.join(process.cwd(), '../README.md'),
		'utf-8',
	);

	return content;
};

(async () => {
	const readmeContent = await getReadmeContent();

	await fs.writeFile(
		path.join(process.cwd(), 'documentation.md'),
		readmeContent,
	);
})();
