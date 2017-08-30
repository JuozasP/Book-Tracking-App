import React, {Component} from 'react';
import BookModal from './BookModal';

class ShelfComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            showModal: false,
            selectedBook: []
        });
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({showModal: false});
    };

    open() {
        this.setState({showModal: true});
    };

    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map((book) => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                                            }}
                                                 onClick={() => {this.open();this.setState({selectedBook:book})}}/>
                                            <div className="book-shelf-changer">
                                                <select onChange={(e) => this.props.changeShelf(book, e.target.value)}>
                                                    <option value="none" disabled selected>Move to...</option>
                                                    <option
                                                        value="currentlyReading">{book.shelf === 'currentlyReading' && String.fromCharCode("10004")}Currently
                                                        Reading
                                                    </option>
                                                    <option
                                                        value="wantToRead">{book.shelf === 'wantToRead' && String.fromCharCode("10004")}Want
                                                        to Read
                                                    </option>
                                                    <option
                                                        value="read">{book.shelf === 'read' && String.fromCharCode("10004")}Read
                                                    </option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>

                                    </div>
                                </li>
                            ))}
                        </ol>
                        {this.state.showModal ? <BookModal show={this.state.showModal}
                                                           onHide={this.close} book={this.state.selectedBook}/> : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default ShelfComponent;