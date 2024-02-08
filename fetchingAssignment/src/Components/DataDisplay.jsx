import React,{memo} from 'react';


function DataDisplay({data}){
    return <>
    <div style={{margin:'10px',padding:'10px',border:'1px dashed white'}}>
      <h1>{data.title}</h1>
      <h2>{data.id}</h2>
    </div>
    </>

}
// if any state changes it trigger the re render. memo will render only when it needs
export default memo(DataDisplay)
