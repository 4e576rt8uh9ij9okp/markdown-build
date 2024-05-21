#! /usr/bin/env node

const { resolve } = require('path')
const { argv, cwd } = require('process')
const build = require('../src/build.js')

const folderPath = resolve(cwd(), argv.slice(2)[0] || ".")

build(folderPath)