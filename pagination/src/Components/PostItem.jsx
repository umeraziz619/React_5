import React from "react";

function PostItem({post}){

    return (
        <>
       {post.map((ele)=>(
        <div key={ele.id}>
            <p>{ele.id}</p>
            <p>{ele.title}</p>
            <p>{ele.body}</p>
        </div>
       )

       )}
        </>
    )
  
}

export default PostItem;