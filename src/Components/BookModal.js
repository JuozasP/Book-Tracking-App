import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const BookModal = (props) => (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{props.book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="modal-container">
                <div className="book-cover" style={{
                    width: 128*1.5,
                    height: 193*1.5,
                    backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:"cover",
                    paddingTop: "10px"
                }}/>
                <div className="modal-right">
                    <h4>Authors</h4>
                    <p>{props.book.authors}</p>
                    <h4>Language</h4>
                    <p>{props.book.language}</p>
                    <h4>Maturity Level</h4>
                    <p>{props.book.maturityRating}</p>
                    <h4>Page Count</h4>
                    <p>{props.book.pageCount}</p>
                    <h4>Publish Date</h4>
                    <p>{props.book.publishedDate}</p>
                </div>
            </div>
            <div>
                <h3>Description</h3>
                <p>{props.book.description}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => props.onHide()}>Close</Button>
        </Modal.Footer>
    </Modal>
);

export default BookModal;