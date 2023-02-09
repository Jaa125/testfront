import React, { useEffect, useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import backCard from "../../assets/imgpost/backcard.png";
import imgpostt from "../../assets/imgpost/imgpostt.jpg";



const width = 40;
const height = 45;

  
function CardComponent() {
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const cards = [];
  const [isFlipped, setIsFlipped] = useState(JSON.parse(localStorage.getItem('canFlip')) || Array(cards.length).fill(true));
  const [canFlip, setCanFlip] = useState(
      JSON.parse(localStorage.getItem('canFlip')) || Array(rows * columns).fill(false)
  );

  const handleCardClick = (index) => {
    console.log('index', index)
    
    setIsFlipped(prevState => {
      // if (typeof r !== 'number' || typeof c !== 'number') {
      //   return prevState;
      // }
      const newState = [...prevState];
      newState[index] = !prevState[index];
      localStorage.setItem(`card-${index}`, JSON.stringify(newState[index]));
      return newState;
    });
  
    // if (!canFlip[r][c]) return;
        
    // setIsFlipped(prev => {
    //     const newIsFlipped = [...prev];
    //     newIsFlipped[r][c] = !newIsFlipped[r][c];
    //     return newIsFlipped;
    // });

    // setCanFlip(prev => {
    //     const newCanFlip = [...prev];
    //     newCanFlip[r][c] = false;
    //     localStorage.setItem('canFlip', JSON.stringify(newCanFlip));
    //           // localStorage.setItem(`card-${r}-${c}`, JSON.stringify(newState[r][c]));

    //     return newCanFlip;
    // });

  };
 
  
  useEffect(() => {
    const initialState = [];
    
    for (let i = 0; i < numberOfPieces; i++) {
      const flipped = JSON.parse(localStorage.getItem(`card-${i}`)) || true;
      initialState.push(flipped);
    }
    setFlippedCards(initialState);
  }, [numberOfPieces]);


//getinput value
useEffect(() => {
  if (numberOfPieces>0){
    

  
    let root = Math.sqrt(numberOfPieces);
    let rounded = Math.round(root);
    if (root - rounded === 0) {
    setRows(rounded);
    setColumns(rounded);
    } else {
    let ceil = Math.ceil(root);
    setRows(ceil);
    setColumns(Math.floor(numberOfPieces / ceil));
    console.log('rows, columns', rows , columns);
    }
    // localStorage.setItem('canFlip', JSON.stringify(array));
  }
  


},[numberOfPieces])


  if (numberOfPieces){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
           const key = `${i}-${j}`;
          //  localStorage.setItem(`card-${i}-${j}`, JSON.stringify(true));

          cards.push(
            <Flippy
            key={key}
            flipOnClick={canFlip[(i * columns + j)- 1]}
            isFlipped={isFlipped[(i * columns + j) - 1]}
            onClick={() => handleCardClick(i * columns + j)}
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
        opacity: isFlipped[(i * columns + j) - 1] ? 0.5 : 1
      }}>
                          <h2></h2>
                      </FrontSide>
                      <BackSide style={{
                         width: `${width}px`,
                         height: `${height}px`,
                          backgroundImage: `url(${backCard})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat'
                      }}>
                          <h2></h2>
                          {/* <img src={backCard} /> */}
                      </BackSide>
                  </Flippy>
          );
        }
      }
     
}
  // {Array.from({ length: numberOfPieces }, (_, index) => (
  //   <Flippy
  //     key={index}
  //     flipOnHover={false}
  //     flipOnClick={true}
  //     flipDirection="horizontal"
  //     style={{ width: "100px", height: "100px", margin: "10px" }}
  //     isFlipped={flippedCards[index]}
  //     onClick={() => handleCardClick(index)}
  //   >
  //     <FrontSide
  //       style={{
  //         backgroundColor: "transparent"
  //       }}
  //     />
  //     <BackSide
  //       style={{
  //         backgroundImage: `url(${backCard})`,
  //         backgroundSize: "cover"
  //       }}
  //     />
  //   </Flippy>
  // ))}
  // useEffect(() => {
  //   if (numberOfPieces) {
  //     let root = Math.sqrt(numberOfPieces);
  //     let rounded = Math.round(root);
  //     if (root - rounded === 0) {
  //       setRows(rounded);
  //       setColumns(rounded);
  //     } else {
  //       let ceil = Math.ceil(root);
  //       setRows(ceil);
  //       setColumns(Math.floor(numberOfPieces / ceil));
  //     }
  //     localStorage.setItem("flippedCards", JSON.stringify(Array(numberOfPieces).fill(true)));
  //     setFlippedCards(Array(numberOfPieces).fill(true));
  //   }
  // }, [numberOfPieces]);

  // // useEffect(() => {
  // //   localStorage.setItem("flippedCards", JSON.stringify(flippedCards));
  // // }, [flippedCards]);

  // const handleCardClick = index => {
  //   setFlippedCards(prevState => {
  //     const newState = [...prevState];
  //     newState[index] = !prevState[index];
  //     return newState;
  //   });
  // };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form>
        <label htmlFor="pieces">Enter the number of pieces:</label>
        <input
          type="number"
          id="pieces"
          name="pieces"
          value={numberOfPieces}
          onChange={(e) => setNumberOfPieces(e.target.value)}
        />
      <p>
        Rows: {rows} Columns: {columns}
      </p>
      </form>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
        

{cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
      </div>
    </div>
  );
};




export default CardComponent;
