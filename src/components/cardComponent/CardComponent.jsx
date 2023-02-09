import React, { useEffect, useState } from 'react';
import FlippyCard from '../FlippyCard/FlippyCard';






  
function CardComponent() {
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [indexpieces, setIndexofPieces] = useState(0);

  const cards = [];
  const [isFlipped, setIsFlipped] = useState(JSON.parse(localStorage.getItem('canFlip')) || Array(cards.length).fill(false));
  const [canFlip, setCanFlip] = useState(Array(indexpieces).fill(true)
  );

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
    // console.log('rows, columns', rows , columns);
    }
    // localStorage.setItem(Array(rows * columns).fill(false));
  }
  


},[numberOfPieces])


  // useEffect(() => {
  //   const savedState = JSON.parse(localStorage.getItem('canFlip')) || Array(rows * columns).fill(true);
  //   setCanFlip(savedState);
  // }, []);
  
  const handleCardClick = (index) => {
          console.log('index', index)
setIndexofPieces(index);
    setFlippedCards(prevState => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      localStorage.setItem('canFlip', JSON.stringify(newState[index]));
      // localStorage.setItem(`canFlip`, JSON.stringify(newState[index]));
      return newState;
    });
  
  };
 
  // useEffect(() => {
  //   localStorage.setItem('canFlip', JSON.stringify(canFlip));
  // }, [canFlip]);
  
  // useEffect(() => {
  //   const initialState = [];
    
  //   for (let i = 0; i < numberOfPieces; i++) {
  //     const flipped = JSON.parse(localStorage.getItem(`card-${i}`)) || true;
  //     initialState.push(flipped);
  //   }
  //   setFlippedCards(initialState);
  // }, [numberOfPieces]);





  if (numberOfPieces){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
           const key = `${i}-${j}`;
          //  localStorage.setItem(`card-${i}-${j}`, JSON.stringify(true));

          cards.push(
           <FlippyCard key={key} handleCardClick={()=> handleCardClick(i,j)} i={i} j={j} rows={rows} columns={columns}/>
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
