import { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import backCard from "../../assets/imgpost/backcard.png";
import imgpostt from "../../assets/imgpost/imgpostt.jpg";
const width = 40;
const height = 45;
function FlippyCard({handleCardClick, rows, columns,i,j}) {
    const [flipped, setFlipped] = useState(true);

  return (
    <Flippy
   
    
    // flipOnClick={canFlip[(i * columns + j)- 1]}
    isFlipped={flipped}
    onClick={() => handleCardClick()}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${imgpostt})`,
        backgroundPosition: `-${j * width}px -${i * height}px`,
        backgroundSize: `${width * columns}px ${height * rows}px`,
        backgroundRepeat: 'no-repeat',
        margin:  '2px',
      
      }}
    >
    
        
                <FrontSide style={{
opacity: flipped ? 0.5 : 1
}}>
                 
              </FrontSide>
              <BackSide style={{
                 width: `${width}px`,
                 height: `${height}px`,
                  backgroundImage: `url(${backCard})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
              }}>
                  
                  {/* <img src={backCard} /> */}
              </BackSide>
          
          </Flippy>
  )
}

export default FlippyCard