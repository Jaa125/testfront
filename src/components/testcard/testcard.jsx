import React, { useEffect, useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import backCard from "../../assets/imgpost/backcard.png";
import imgpostt from "../../assets/imgpost/imgpostt.jpg";



const width = 40;
const height = 45;


function testcard() {
    const [pieces, setPieces] = useState(0);
    const [part2, setPart2] = useState(0);

    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [rows2, setRows2] = useState(0);
    const [columns2, setColumns2] = useState(0);
  
    const handleChange = (e) => {
        // if (e.target.value <= 400) {
        //     setPieces(e.target.value);

     
        //     // setPart2(pieces - 400);
        //     let root = Math.sqrt(pieces);
        //     let rounded = Math.round(root);
        //     if (root - rounded === 0) {
        //       setRows(rounded);
        //       setColumns(rounded);
        //     } else {
        //       let ceil = Math.ceil(root);
        //       setRows(ceil);
        //       setColumns(Math.floor(pieces / ceil));
        //     }
        // }else if (e.target.value > 400){
        //     setPieces(400);
        //      setPart2(e.target.value - 400);

        //      let root = Math.sqrt(pieces);
        //     let rounded = Math.round(root);
        //     if (root - rounded === 0) {
        //       setRows(rounded);
        //       setColumns(rounded);
        //     } else {
        //       let ceil = Math.ceil(root);
        //       setRows(ceil);
        //       setColumns(Math.floor(pieces / ceil));
        //     }

        //     let root2 = Math.sqrt(part2);
        //     let rounded2 = Math.round(root2);
        //     if (root2 - rounded2 === 0) {
        //       setRows2(rounded2);
        //       setColumns2(rounded2);
        //     } else {
        //       let ceil2 = Math.ceil(root2);
        //       setRows2(ceil2);
        //       setColumns2(Math.floor(part2 / ceil2));
        //     }

        // }
        setPieces(e.target.value);

     
            // setPart2(pieces - 400);
            let root = Math.sqrt(pieces);
            let rounded = Math.round(root);
            if (root - rounded === 0) {
              setRows(rounded);
              setColumns(rounded);
            } else {
              let ceil = Math.ceil(root);
              setRows(ceil);
              setColumns(Math.floor(pieces / ceil));
            }
      
     
      
      
    };

    let cards = [];
    let cards2 = [];
    const [isFlipped, setIsFlipped] = useState(JSON.parse(localStorage.getItem('canFlip')) || Array(cards.length).fill(true));
    const [canFlip, setCanFlip] = useState(
        JSON.parse(localStorage.getItem('canFlip')) || Array(rows * columns).fill(false)
    );
    useEffect(() => {
      if (isFlipped) {
          let localcard = localStorage.setItem('canFlip', JSON.stringify(canFlip));

          console.log('canFlipp', localcard)
      }
  }, [canFlip]);

    useEffect(() => {
       
            let tempRows = Math.ceil(Math.sqrt(pieces));
        while (pieces % tempRows !== 0) {
          tempRows++;
        }
        setRows(tempRows);
        setColumns(pieces / tempRows);
        // if(part2 >0){
        //     let tempRows2 = Math.ceil(Math.sqrt(part2));
        //     while (part2 % tempRows2 !== 0) {
        //       tempRows2++;
        //     }
        //     setRows2(tempRows2);
        //     setColumns2(part2 / tempRows2);
        // }
         
      }, [pieces]);
 const handleCardClick = (id) => {
      console.log('idd',id)
        if (!canFlip[id - 1]) return;
        
        setIsFlipped(prev => {
            const newIsFlipped = [...prev];
            newIsFlipped[id - 1] = !newIsFlipped[id - 1];
            return newIsFlipped;
        });

        setCanFlip(prev => {
            const newCanFlip = [...prev];
            newCanFlip[id - 1] = false;
            localStorage.setItem('canFlip', JSON.stringify(newCanFlip));
            return newCanFlip;
        });

        console.log('clicked card id:', id);
    };

      
    if (pieces){
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
               const key = `${i}-${j}`;
         
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
    // if (part2>0){
    //     for (let i = 0; i < rows2; i++) {
    //         for (let j = 0; j < columns2; j++) {
    //            const key = `${i}-${j}`;
         
    //           cards2.push(
    //             <Flippy
    //             key={key}
    //             flipOnClick={canFlip[(i * columns2 + j)- 1]}
    //             isFlipped={isFlipped[(i * columns2 + j) - 1]}
    //             onClick={() => handleCardClick(i * columns2 + j)}
    //               style={{
    //                 width: `${width}px`,
    //                 height: `${height}px`,
    //                 backgroundImage: `url(${imgpostt})`,
    //                 backgroundPosition: `-${j * width}px -${i * height}px`,
    //                 backgroundSize: `${width * columns2}px ${height * rows2}px`,
    //                 backgroundRepeat: 'no-repeat',
    //                 margin:  '2px',
                  
    //               }}
    //             >
                
    //                       <FrontSide style={{
    //         opacity: isFlipped[(i * columns2 + j) - 1] ? 0.5 : 1
    //       }}>
    //                           <h2></h2>
    //                       </FrontSide>
    //                       <BackSide style={{
    //                          width: `${width}px`,
    //                          height: `${height}px`,
    //                           backgroundImage: `url(${backCard})`,
    //                           backgroundSize: 'cover',
    //                           backgroundRepeat: 'no-repeat'
    //                       }}>
    //                           <h2></h2>
    //                           {/* <img src={backCard} /> */}
    //                       </BackSide>
    //                   </Flippy>
    //           );
    //         }
    //       }
         
    // }

  

   

    return (
        <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
   
      <div>
      <input type="number" value={pieces} onChange={handleChange} />
      <p>
        Rows: {rows} Columns: {columns}
      </p>
      {/* <p>
        Rows2: {rows2} Columns: {columns2}
      </p> */}
      </div>
       <div style={{ display: 'flex', flexWrap: 'wrap' , alignItems: 'center', justifyContent: 'center' }}>
       {cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
       </div>
       {/* <div style={{ display: 'flex', flexWrap: 'wrap' , alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
       {cards2.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
       </div> */}
  </div>
    
    );
}

export default testcard