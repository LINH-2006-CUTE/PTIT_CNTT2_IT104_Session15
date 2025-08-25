import React from "react";

function DetailPost({item}) {
  return (
    <div style={{ border: "1px solid gray",padding: "30px" }}>
      <p><b>Id:</b> {item.id}</p>
      <p><b>Title:</b> {item.title}</p>
      <p><b>Content:</b> {item.content}</p>
      <p><b>Author:</b> {item.author}</p>
    </div>
  );
}

export default DetailPost;
