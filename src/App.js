import React from 'react'
import Form from './Form.js'

function App() {
    const [formData,setFormData]=React.useState({});
    function onChangeHandler(event){
        setFormData(prevData=>{
            return {...prevData,
                [event.target.name] : event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        fetch('/submit',{
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(formData), // body data type must match "Content-Type" header
          });
    }
    console.log(formData);
  return (
    <Form
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        data={formData}
    />
  )
}

export default App