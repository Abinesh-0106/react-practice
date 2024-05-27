import React from 'react'

function Form({onChangeHandler,submitHandler,data}) {
  return (
    <form>
      <label htmlFor="name">Name :</label>
      <input 
      onChange={onChangeHandler} 
      type="text" id="name" 
      name="name"
        value={data.name}
      />
      <br />
      <label htmlFor="mobileNumber">Mobile Number :</label>
      <input 
      onChange={onChangeHandler} 
      type="text" 
      id="mobileNumber" 
      name="mobileNumber"
      value={data.mobileNumber}
      
       />
      <br />
      <label htmlFor="ageGroup">Age Group :</label>
      <select onChange={onChangeHandler} name="ageGroup" id="ageGroup">
        `
        <optgroup label="Child">
          <option 
          value="Below 9"
          selected = {data.ageGroup=="Below 9"}
          >Below 9</option>
          <option 
          value="9 -17"
          selected = {data.ageGroup=="9 -17"}
          >9 -17</option>
        </optgroup>
        <optgroup label="Adults">
          <option 
          value="18-59"
          selected = {data.ageGroup=="18-59"}
          >18-59</option>
        </optgroup>
        <optgroup label="Senior Citizen">
          <option 
          value="60 & Above"
          selected = {data.ageGroup=="60 & Above"}
            >60 & Above</option>
        </optgroup>
      </select>
      <br />
      <p style={{display:'inline-block',margin:0}}>Are you happy :</p>
      <label htmlFor="yes">Yes</label>
      <input 
      onChange={onChangeHandler} 
      type="radio" 
      value="Yes" 
      name="happy" 
      id="yes" 
      checked={data.happy}
      />
      <label htmlFor="no">No</label>
      <input 
      onChange={onChangeHandler} 
      type="radio" 
      value="no" 
      name="happy" 
      id="no" 
      checked={data.happy}
      />
      <br/>
      <button type="button" onClick={submitHandler}>Submit</button>
    </form>

  )
}

export default Form