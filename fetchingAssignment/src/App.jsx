import { useState } from 'react'

import './App.css'
import DataDisplay from './Components/DataDisplay'

function App() {
  const [Data, setData] = useState([])



  async function fetchData(){
try {
  let f_hData= await fetch('https://jsonplaceholder.typicode.com/posts')
  let finalData= await f_hData.json()

console.log(finalData)
setData(finalData)


} catch (error) {
  
}
}

  return (
    <>
      <button onClick={fetchData}>Click</button>
      {Data.map((el)=>{
        return  <DataDisplay data={el} key = {el.id}/>
      })}
     

    </>
  )
}

export default App
