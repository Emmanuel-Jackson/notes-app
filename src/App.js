import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import NotesList from './NotesComponents/NotesList'
import Header from './HeaderComponent/Header'
import Search from './HeaderComponent/Search'
export default function App() {

  const [notes, setNotes] = useState([])

  const [colors, setColors] = useState('#05fc64')
  //const [tags, setTags] = useState(["yourkeep"]);
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (title, text, colors, tags) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
      colors: colors,
      tags: tags
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const handleColorChange = (e) => {
    setColors(e.target.value)
    console.log('hello')
  }
  
  return (
    <div className="container">
      {/*Add Search and Header*/}
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        className="notes-list"
        setNotes={setNotes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleColorChange={handleColorChange}
        setColors={setColors}
        colors={colors}
        //handleSaveClick={handleSaveClick}
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} />

    </div>
  );
}