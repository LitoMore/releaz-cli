#!/usr/bin/env node
'use strict';

const releaz = require('releaz');
const meow = require('meow');

const cli = meow(`
	Usage
		$ releaz [revision range] [options]

	Options
		--format, -f	Git pretty format

	Example
		$ releaz 9e21fc4..HEAD
		$ releaz 9e21fc4..HEAD -f '%H %an %s'
`, {
	flags: {
		format: {
			type: 'string',
			alias: 'f'
		}
	}
});

const {format} = cli.flags;
const [range] = cli.input;

console.log(releaz({range, format}));
