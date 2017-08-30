import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {search, update, getAll} from '../BooksAPI';
import ShelfComponent from './ShelfComponent';


class SearchComponent extends Component {
    constructor(props){
        super(props);
        this.state=({
            searchedBooks: [],
            booksIdArray: []
        });
        this.handleSearch=this.handleSearch.bind(this);
        this.changeShelf=this.changeShelf.bind(this);
    }
    componentDidMount() {
        getAll().then(response => {
            this.setState({booksIdArray: response.map(res => res.id)});
        });
    }
    handleSearch(searchBook){
        search(searchBook).then((data) =>{
            this.setState({
                searchedBooks: data
            });
        });
    }
    changeShelf(book, status) {
        const newState = [];
        this.state.searchedBooks.map((stateBook) => {
            if (stateBook.id === book.id) {
                stateBook.shelf = status;
            }
            newState.push(stateBook);
        });
        this.setState({
            searchedBooks: newState.filter((filteredBook) => (filteredBook.id !== book.id))
        });
        update(book, status);
    }
    render() {
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input onChange={(e) => this.handleSearch(e.target.value)} type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                </div>
                <div className="list-books-content">
                    <ShelfComponent
                        title="Search Results"
                        books={this.state.searchedBooks.filter(searchedBook => !this.state.booksIdArray.includes(searchedBook.id))}
                        changeShelf={this.changeShelf}
                    />
                </div>
            </div>
        );
    }
}

export default SearchComponent;