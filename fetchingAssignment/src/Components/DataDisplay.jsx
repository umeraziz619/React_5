import React from 'react';


function DataDisplay({data}){
    return <>
    <div style={{margin:'10px',padding:'10px',border:'1px dashed white'}}>
      <h1>{data.title}</h1>
      <h2>{data.id}</h2>
    </div>
    </>

}

export default DataDisplay