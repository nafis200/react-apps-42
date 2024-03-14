
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx/Header'
import Blogss from './components/blogs/Blogss'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
    const [bookmarks, setBookmarks] = useState([])

    const [reading,setReading] = useState(0)

    const handleAddbook = blog =>{
       const newbookmarks = [...bookmarks,blog];
       setBookmarks(newbookmarks)
    }

    const handleTime = (id,time) =>{
         setReading(time + reading)
         const remainingBook = bookmarks.filter(bookmark => bookmark.id !== id)
         setBookmarks(remainingBook)
    }
  return (
    <>
      <Header></Header>
      <div className='md:flex mt-5 max-w-7xl mx-auto'>
      <Blogss handleTime={handleTime} handleAddbook={handleAddbook}></Blogss>
      <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
      </div>
    </>
  )
}

export default App
