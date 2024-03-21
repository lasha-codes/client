import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/books')
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBooks()
  }, [])

  return (
    <div>
      <h1>Lama Book Shop</h1>
      <div className='books'>
        {books &&
          books.map((book) => (
            <div className='book' key={book.id}>
              {book.cover && <img src={book.cover} alt='' />}
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <span>{book.price}</span>
            </div>
          ))}
      </div>
      <button>
        <Link to='/add'>Add new book</Link>
      </button>
    </div>
  )
}

export default Books
