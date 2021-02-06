const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((item) => item.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added'))
    } else {
        console.log(chalk.red('Note title has already taken'))
    }

}


const removeNote = (title) => {
    const notes = loadNotes()
    const removingNote = notes.filter((item) => item.title !== title)

    if (notes.length > removingNote.length) {
        console.log(chalk.green(`Note with title '${title}' has been removed`))
    } else {
        console.log(chalk.red('Note not found'))
    }

    saveNotes(removingNote)
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((item) => console.log(chalk.cyan(`Title: ${item.title}, content: ${item.body}`)))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((item) => item.title === title)

    if (findNote) {
        console.log(chalk.cyan(`Your note is: ${findNote.title}, ${findNote.body}`))
    } else {
        console.log(chalk.red('Not found'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}
