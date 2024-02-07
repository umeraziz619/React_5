import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import PostItem from './Components/postItem'

function App() {
  const [data, setData] = useState([])
  const [load, setloading] = useState(false)
  const [error, seterror] = useState(null)
  const [page, setPage] = useState(1)


 let Next=()=>{
setPage(page+1)
}
function Prev(){
setPage(page-1)
}


  async function fetchData() {

    setloading(true)
    try {
      let api = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      let final = await api.json()
      setData(final)
      // console.log(final)

      setloading(false)



    } catch (error) {
      setloading(false)
      seterror(`error=${error}`)
    }
  }

  useEffect(() => {
    fetchData(page)
  }, [page])


  return (


    <div>
      <h1>Data fetched from JSON API:</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {load ? (
            <p>Loading..................</p>
          ) : (
            <PostItem post={data} />
          )}
        </div>
      )}
     <div>
      <button style={{color:"blue" ,background:"white"}} onClick={Prev} disabled={page===1}  >Prev</button>
      <button style={{color:"black",background:"white"}} onClick={Next} disabled={page===10}>Next</button>
    
     </div>
    </div>
  );
}

export default App;