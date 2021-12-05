#!/usr/bin/env node

/**
 * test-create-node-cli
 * foobar
 *
 * @author foobar <foobar>
 */
import ora from 'ora';
import shell from 'shelljs'

import init from './utils/init.js'
import cli from './utils/cli.js'
import log from './utils/log.js'
import files from './utils/fs.js'

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	input.includes(`help`) && cli.showHelp(0);

  files.cpBoilerplate('empty-webpack', process.cwd(), input[0])

	debug && log(flags);
})();
