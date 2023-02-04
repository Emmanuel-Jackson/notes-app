import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, setNotes, handleAddNote, handleDeleteNote, handleEditNote, handleColorChange, colors, setColors, handleTagsChange }) => {
  
  return (
    <div className="notes-list">

      {notes && notes.map((note, key) => (
        <Note key={note.id} id={note.id} date={note.date} title={note.title} text={note.text} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} colors={note.colors} />
      ))}

      <AddNote handleColorChange={handleColorChange} handleAddNote={handleAddNote} colors={colors} setColors={setColors} handleTagsChange={handleTagsChange} />
    </div>

  )
}

export default NotesList