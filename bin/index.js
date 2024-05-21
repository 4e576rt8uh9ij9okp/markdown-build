#! /usr/bin/env node

const yargs = require('yargs')
const build = require('../src/build.js')

yargs.usage("mdbuild -p <path>, parent folder must contain 'templates/layout.eta' and 'www/index.md'")
    .option("p", {
        alias: "path",
        describe: "Parent folder",
        type: "string",
        demandOption: true})
    .help(true)
    .argv

const args = yargs(process.argv.slice(2)).parse()
const folderPath = args.p || args.path

build(folderPath)