# releaz-cli

[![](https://img.shields.io/npm/v/releaz-cli.svg)](https://www.npmjs.com/package/releaz-cli)
[![](https://img.shields.io/npm/l/releaz-cli.svg)](https://github.com/LitoMore/releaz-cli/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

A CLI tool for generate release note

## Install

```shell
npm i -g releaz-cli
```

## Usage

```
Usage
  $ releaz [revision range] [options]

Options
  --format, -f	Git pretty format

Example
  $ releaz 9e21fc4..HEAD
  $ releaz 9e21fc4..HEAD -f '%H %an %s'
```

## Related

- [releaz](https://github.com/LitoMore/releaz) - API for this module

## License

MIT © [LitoMore](https://github.com/LitoMore)
