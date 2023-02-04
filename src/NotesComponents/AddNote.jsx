import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import Modal from 'react-modal'
import cx from 'classnames';


//import { TagsInput } from "react-tag-input-component";

Modal.setAppElement('#root')

export default function AddNote({ handleAddNote, handleColorChange, colors, setColors, tags, setTags }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [closeModalIsOpen, setClosedModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const [titleText, setTitleText] = useState('')

  const characterTextLimit = 250
  const characterTitleLimit = 30
  const handleChangeText = (e) => {
    if(characterTextLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
      console.log("Paragraph Text: ",e.target.value)
    }
  }

  const handleTitleText = (e) => {
    if(characterTitleLimit - e.target.value.length >= 0) {
      console.log("Title Text: ", e.target.value)
      setTitleText(e.target.value)
    }
  }
  
  const handleSaveClick = (e) => {
   if (noteText && titleText.trim().length > 0) {
    handleAddNote(titleText, noteText, colors) //Add color
    setNoteText('')
    setColors(colors)
    }
  }

return (
  <>
    <div className="modal-container">

      <IoIosAddCircle onClick={() => setModalIsOpen(true)} className="open-modal-btn" data-tip data-for="add-btn-tooltip"></IoIosAddCircle>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, .7)'}, content: {position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#FFF', padding: '10px', width: '50%', height: '40%', zIndex: 1000, borderRadius: '.3rem' }}}>
        <div className="modal-header">
        <h2>New note</h2>
        <IoCloseOutline className="close-btn" onClick={() => setModalIsOpen(false)} data-tip data-for="close-btn-tooltip"></IoCloseOutline>
        </div>
        <div className="body">
          <div className="title-container">
            <label>Title</label>
            <input type="text" placeholder="Enter your title" onChange={handleTitleText} value={titleText} className="title" />
            <small className="characterlimit1">{characterTitleLimit - titleText.length} Remaining</small>
          </div>
          <div className="write-container">
            <label>Write</label>
            <textarea className="body-par" value={noteText} onChange={handleChangeText} placeholder="Type something..." style={{resize: "none"}} type="text" />
            <small>{characterTextLimit - noteText.length} Remaining</small>
          </div>
      </div>
        <div className="modal-footer">
        <div className="color-picker" onChange={handleColorChange} data-tip data-for="colors-tooltip">
          <input type="radio" name="color-pick" value="#F06292" id="color1" />
          <label htmlFor="color1" style={{backgroundColor: "#F06292"}}></label>
          <input type="radio" name="color-pick" value="#BA68C8" id="color2" />
          <label htmlFor="color2" style={{backgroundColor: "#BA68C8"}}></label>
          <input type="radio" name="color-pick" value="#FFD54F" id="color3" />
          <label htmlFor="color3" style={{backgroundColor: "#FFD54F"}}></label>
          <input type="radio" name="color-pick" value="#4FC3F7" id="color4" />
          <label htmlFor="color4" style={{backgroundColor: "#4FC3F7"}}></label>
          <input type="radio" name="color-pick" value="#AED581" id="color5" />
          <label htmlFor="color5" style={{backgroundColor: "#AED581"}}></label>
          <input type="radio" name="color-pick" value="#FFA500" id="color6" />
          <label htmlFor="color6" style={{backgroundColor: "#FFA500"}}></label>
          <input type="radio" name="color-pick" value="#e64343" id="color7" />
          <label htmlFor="color7" style={{backgroundColor: "#e64343"}}></label>
          <input type="radio" name="color-pick" value="#40E0D0" id="color8" />
          <label htmlFor="color8" style={{backgroundColor: "#40E0D0"}}></label>
          <input type="radio" name="color-pick" value="#0a71a1" id="color9" />
          <label htmlFor="color9" style={{backgroundColor: "#0a71a1"}}></label>
          <input type="radio" name="color-pick" value="#808080" id="color10" />
          <label htmlFor="color10" style={{backgroundColor: "#808080"}}></label>
          <input type="radio" name="color-pick" value="#d4d2d2" id="color11" />
          <label htmlFor="color11" style={{backgroundColor: "#d4d2d2"}}></label>
        </div>
          <div className="modal-btn-footer">
          <button onClick={() => setModalIsOpen(false)} className="cancel-btn">Cancel</button>
          <button className="add-btn" onClick={handleSaveClick}>Add</button>
          </div>
          </div>
      </Modal>
    </div>

    </>
  );
}