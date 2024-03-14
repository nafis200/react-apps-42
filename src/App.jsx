
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx/Header'
import Blogss from './components/blogs/Blogss'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
    const [bookmarks, setBookmarks] = useState([])

    const handleAddbook = blog =>{
      console.log('bookmark adding soon')
    }
  return (
    <>
      <Header></Header>
      <div className='md:flex mt-5 max-w-7xl mx-auto'>
      <Blogss handleAddbook={handleAddbook}></Blogss>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
