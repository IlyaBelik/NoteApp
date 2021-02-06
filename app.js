const notes = require('./notes')
const yargs = require('yargs')


yargs.command([{
        command: 'add',
        describe: 'Adding a new note',
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
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    },
        {
            command: 'remove',
            describe: 'removing an existing note',
            builder: {
                title: {
                    describe: 'Note Title',
                    demandOption: true,
                    type: "string"
                }
            },
            handler(argv) {
                notes.removeNote(argv.title)
            }
        },
        {
            command: 'read',
            describe: 'Read note',
            builder: {
                title: {
                    describe: 'Note Title',
                    demandOption: true,
                    type: "string"
                },
                body: {
                    describe: 'Note Body',
                    demandOption: false,
                    type: "string"
                }
            },
            handler(argv) {
                notes.readNote(argv.title, argv.body)
            }
        },
        {
            command: 'list',
            describe: 'Show list of notes',
            handler() {
                notes.listNotes()
            }
        }]
)

yargs.parse()