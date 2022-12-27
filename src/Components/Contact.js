import React from 'react'
import "../Components/Contact.css"

const Contact = () => {
  return (
    <>
    <h1 className='heading'>Contact</h1>
    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3733110.8978665643!2d78.42296105!3d23.9740114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1667831209957!5m2!1sen!2sin" 
   ></iframe>
    <form action="https://formspree.io/f/xvoydoyg" method="post">
      <input type="text" name="Username" placeholder='Name' autoComplete='off'/>
      <input type="email" name='Email' placeholder='Email'/>
      <textarea name="Message" id="" cols="30" rows="10" 
      placeholder='Write message...' autoComplete='off'></textarea>
    <input type="submit" value="Submit" />
    </form>
    </>
  )
}
export default Contact