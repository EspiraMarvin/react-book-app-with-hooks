import React, { useContext, useState } from 'react';
import {BookContext} from "../contexts/BookContext";

const BookForm = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: {
            title, author
            }});
        setTitle('');
        setAuthor('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" required value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="book aUthor" required value={author}
                   onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="Add Book" />
        </form>
    );
};

export default BookForm;
