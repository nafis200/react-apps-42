
import './App.css'
import Header from './components/Header.jsx/Header'
import Blogss from './components/blogs/Blogss'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='md:flex mt-5'>
      <Blogss></Blogss>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
