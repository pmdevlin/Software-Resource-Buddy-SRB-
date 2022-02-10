import React from 'react'


export default function FooterUpdate (props){
 //console.log(props);

 const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target[0].value
    const link = e.target[1].value
   //  const docs = e.target[2].value
    props.submitPost(name, link)
 }

   return(
      <div className='update-card'>
         <form className='update-form' onSubmit={handleSubmit}>
            <label className='update-title' ><h2>Enter A Title For Your Resource</h2></label>
            <input className='input' type="text" placeholder=':Title'/>
            <label className='update-title'><h2>Enter A Link For Your Resource</h2></label>
            <input className='input' type="text" placeholder=':Link To Resource'/>
            {/* <label>Enter a link to the Documentation for your Resource</label>
            <input type="text"/> */}
            <button className='update-btn' type="submit" >Add Resource</button>
         </form>
      </div>
   )
}