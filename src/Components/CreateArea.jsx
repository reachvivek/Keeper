import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.handleClick}>
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.titleValue} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={props.contentValue}/>
        <button onClick={props.handleClick}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
