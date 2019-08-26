const chalk = require('chalk')
const yargs = require('yargs')
const Notes = require('./notes.js')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    Notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing a note!')
  }
})

yargs.command({
  command: 'list',
  describe: 'list the note',
  handler: function () {
    console.log('Listing the note!')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read the notes',
  handler: function () {
    console.log('Reading the notes!')
  }
})

// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse()