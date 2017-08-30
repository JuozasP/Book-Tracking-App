import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {getAll, update} from '../BooksAPI';
import ShelfComponent from './ShelfComponent';

class LibraryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.changeShelf = this.changeShelf.bind(this);
    }

    componentDidMount() {
        getAll().then(response => {
            this.setState({
                books: response
            });
        });
    }

    changeShelf(book, status) {
        const newState = [];
        this.state.books.map((stateBook) => {
            if (stateBook.id === book.id) {
                stateBook.shelf = status;
            }
            newState.push(stateBook);
        });
        this.setState({
            books: newState
        });
        update(book, status);
    }
    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <ShelfComponent
                            title="Currently reading"
                            books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                            changeShelf={this.changeShelf}
                        />
                        <ShelfComponent
                            title="Want to read"
                            books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                            changeShelf={this.changeShelf}
                        />
                        <ShelfComponent
                            title="Read"
                            books={this.state.books.filter((book) => book.shelf === 'read')}
                            changeShelf={this.changeShelf}
                        />
                    </div>
                    <Link to="/search" className="open-search">
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default LibraryComponent;