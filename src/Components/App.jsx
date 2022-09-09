import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  let [note, setNote] = useState(
    [
      {title: 'Sleep', content: 'You have got to get 8 hours of sleep'},
      {title: 'Study', content: 'Try to study for at least 8 hours everyday!'},
      {title: 'Exercise', content: 'Try to walk at least 5000 steps every day.'},
      {title: 'Hydration', content: 'Drink at least 5L of Water everyday!'}
    ])  

  let [item, setItem] = useState({
    title:"",
    content:""
  })

  function handleChange(event){ 
    let {name, value}=event.target
    setItem((prevItem)=>{return{...prevItem, [name]:value}})
  }

  function addNote(event){
    console.log(note)
    if(item.title!=="")setNote((prevNote)=>{return[...prevNote, item]});
    setItem({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  function delNote(pos){
    setNote((prevNote)=>{return prevNote.filter((item, index)=>{return (index!==pos)})});
  }

  return (
    <div>
      <Header />
      <CreateArea titleValue={item.title} contentValue={item.content} handleChange={handleChange} handleClick={addNote}/>
      {note.map((notes, index)=>{return(<Note key={index} id={index} title={notes.title} content={notes.content} del={delNote}/>)})}
      <Footer />
    </div>
  );
}

export default App;
