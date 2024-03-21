import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const [book, setBook] = useState({
    title: '',
    description: '',
    price: null,
    cover: '',
  })
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const navigate = useNavigate()
  const { id } = useParams()

  console.log(id)

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:5000/books/' + id, book)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  console.log(book)

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input
        type='text'
        placeholder='title'
        onChange={handleChange}
        name='title'
      />
      <input
        type='text'
        placeholder='description'
        onChange={handleChange}
        name='description'
      />
      <input
        type='number'
        placeholder='price'
        onChange={handleChange}
        name='price'
      />
      <input
        type='text'
        placeholder='cover'
        onChange={handleChange}
        name='cover'
      />
      <button className='formButton' onClick={handleClick}>
        Update
      </button>
    </div>
  )
}

export default Update
