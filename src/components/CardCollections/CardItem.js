import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BackSide, Flippy, FrontSide } from 'react-flippy'
import backCard from "../../assets/imgpost/backcard.png";
import imgpostt from "../../assets/imgpost/imgpostt.jpeg";
import './card.css'
function CardItem({ rows, columns,i,j,index, height, width,numberOf, fc, setFc}) {
    const [itemflipped, setItemFlipped] = useState(false)
    const [success, setSuccess] = useState(false)
    const h = 35
    const w = 35
    // console.log((i * columns + j))

useEffect(()=> {
setItemFlipped(fc.includes(index)  ? true : false )
setSuccess(fc.includes(index)  ? true : false )
},[])

// getPageId = async (link) => {
    
//   }

const handleFButton = async () => {
  setItemFlipped(true)
  if (!fc.includes(index)){
      setFc([...fc,index])
      setSuccess(true)
  }

      //   const res = await axios.get('/pageid', {
      //       params: {
      //         link: "https://www.facebook.com/hannibal.palac"
      //       }
      //     })
        
      // console.log("ressfront", res?.data.id)
    
 
    // getPageId("https://www.facebook.com/profile.php?id=100089959095787")
   
}

  return (
    <Flippy 
    className="flippycard"
    isFlipped={itemflipped}
    flipOnClick={!itemflipped}
    onClick={handleFButton}
    style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundPosition: `-${j * w}px -${i * h}px`,
        backgroundSize: `${w * columns}px ${h * rows}px`,
        backgroundRepeat: 'no-repeat',
        margin:  '2px',
      
      }}>
        <FrontSide  style={{
                width: `${w}px`,
                height: `${h}px`,
                backgroundImage: `url(${backCard})`,
                backgroundPosition: `-${j * w}px -${i * h}px`,
                backgroundSize: `${w * columns}px ${h * rows}px`,
                backgroundRepeat: 'no-repeat',
              }} >
                    {itemflipped && !success &&  <button onClick={handleFButton}>click</button>}
              </FrontSide>
              <BackSide  

              style={{
                
                width: `${w}px`,
        height: `${h}px`,
        backgroundImage: `url(${ imgpostt})`,
        backgroundPosition: `-${j * w}px -${i * h}px`,
        backgroundSize: `${w * columns}px ${h * rows}px`,
        backgroundRepeat: 'no-repeat',

              }}>
             
              </BackSide>
    </Flippy>
  )
}

export default CardItem