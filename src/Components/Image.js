import React,{useState} from 'react'

const Image = ({ imgs=[{url:""}] }) => {
    const [mainImage,setMainImage] = useState(imgs[0])
    console.log(imgs)
    return (
        
        <div className="image_container">
        {/* <Image imgs={image}/> */}
        <div className="three_image">

          {
            imgs.map((curEle)=>{
                return (
                   <img src={curEle.url} onClick={()=>setMainImage(curEle)}/>
                )
            })
          }

        </div>
        <div className="main_image">
           <img src={mainImage.url} alt="" />
        </div>
      </div>
                  )
                }
            {/* <img src="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img src="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <img src="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}



export default Image