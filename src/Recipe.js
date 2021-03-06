import React, { useState } from 'react';
import style from './recipe.module.css';
import { Modal, Button } from 'react-bootstrap';

const Recipe = ({ title, calories, image, ingredients }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={style.recipe}>
            <h1 className="font-weight-light">{title}</h1>
            <img className={style.image} src={image} alt=""></img>
            <h3 className="font-weight-light">Ingridients</h3>
            <ul>
                {ingredients.map(ingredient => (
                    <li className="font-italic">{ingredient.text}</li>
                ))}
            </ul>
            <h3 className="font-weight-light">Calories</h3>
            <p>{calories}</p>
            <button className="details-button" onClick={handleShow}>Details</button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>{title}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Recipe;