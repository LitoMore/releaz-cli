#!/usr/bin/env node
import releaz from 'releaz';
import meow from 'meow';

const cli = meow(`
	Usage
		$ releaz [revision range] [options]

	Options
		--format, -f	Git pretty format

	Example
		$ releaz 9e21fc4..HEAD
		$ releaz 9e21fc4..HEAD -f '%H %an %s'
`, {
	importMeta: import.meta,
	flags: {
		format: {
			type: 'string',
			shortFlag: 'f',
		},
	},
});

const {format} = cli.flags;
const [range] = cli.input;

const result = await releaz({range, format});
console.log(result);
