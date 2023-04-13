import React, { useState } from "react";
import "./ModalForm.css";
import Modal from "../UI/modal/Modal";
import Input from "../UI/input/Input";
import Button from "../UI/Button";

const ModalForm = ({ onShowModal, addMovie }) => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')

    const titleChangeHandler = ( event)=> {
        setTitle(event.target.value)
    }
    const imageChangeHandler = ( event)=> {
        setImage(event.target.value)
    }
    const ratingChangeHandler = ( event)=> {
        setRating(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const data = {
            id:Math.random().toString(),
            title:title,
            image:image,
            rating:rating,
        }
        addMovie(data)
        onShowModal()
    }
  return (
    <Modal>
      <div className="inputBlock">
        <Input type="text" label="Movie Title" value={title} onChange={titleChangeHandler}/>
        <Input type='url' label="Image URL" value={image} onChange={imageChangeHandler}/>
        <Input type='number' label="Your Rating" value={rating} onChange={ratingChangeHandler}/>
        <div className="formBlockBtn">
          <Button text="Cancel" onClick={onShowModal} />
          <Button text="Add" onClick={submitHandler} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalForm;
