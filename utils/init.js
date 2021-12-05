import welcome from 'cli-welcome'
import unhandled from 'cli-handle-unhandled'

import fs from './fs.js'

const pkg = fs.getPackageJSON()

export default ({ clear = true }) => {
	unhandled();
	welcome({
		title: `test-create-node-cli`,
		tagLine: `by foobar`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
};
