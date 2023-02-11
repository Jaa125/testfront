import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import './card.css'
const height = 100;
  const width = 100;
function CardCollection() {
  const [numberOf, setNumberOfPieces] = useState(100);

  const cards = [];
  const fbLinks = [{url:"https://instagram.com/soussepalace.shdt?igshid=YmMyMTA2M2Y="},
   { url:"https://instagram.com/hannibalpark_sousse?igshid=YmMyMTA2M2Y="},
{url:"https://instagram.com/link_voyages?igshid=YmMyMTA2M2Y="},
{url:"https://instagram.com/traveltodo?igshid=YmMyMTA2M2Y="},
{url:"https://instagram.com/lella_fatouma?igshid=YmMyMTA2M2Y="},

{url:"https://instagram.com/le_salon_feryel_gharbi?igshid=YmMyMTA2M2Y="},
{url:"https://instagram.com/salon_mehdilaatiri_officiel?igshid=YmMyMTA2M2Y="},
{url:"https://instagram.com/thesaloon.sousse?igshid=YmMyMTA2M2Y="},

{url:"https://instagram.com/danmark.cafe?igshid=YmMyMTA2M2Y="},
{url:"https://instagram.com/myway_restolounge?igshid=YmMyMTA2M2Y="}

];
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [fc, setFc] = useState([]);

  useEffect(() => {
    // let tempRows = Math.ceil(Math.sqrt(numberOf));
    // if (numberOf % tempRows !== 0) {
    //   setRows(tempRows);
    //   setColumns(tempRows);
    // }else {
    //   let ceil = Math.ceil(tempRows);
    //   setRows(ceil);
    //   setColumns(Math.floor(numberOf / ceil));
    // }
  
    
      let root = Math.sqrt(numberOf);
      let rounded = Math.round(root);
      if (root - rounded === 0) {
      setRows(rounded);
      setColumns(rounded);
      } else {
      let ceil = Math.ceil(root);
      setRows(ceil);
      setColumns(Math.floor(numberOf / ceil));
      // console.log('rows, columns', rows , columns);
      }
      // localStorage.setItem(Array(rows * columns).fill(false));
    
    
  
  
  },[numberOf])

  if (numberOf > 0) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const key = `${i}-${j}`;
        const link = fbLinks[i * columns + j];
        cards.push(
          <CardItem
          link={link}
            key={key}
            i={i}
            j={j}
            rows={rows}
            columns={columns}
            height={height}
            width={width}
            numberOf={numberOf}
            fc={fc}
            index={i * columns + j}
            setFc={setFc}
          />
        );
      }
    }
  }
  return (
    <div className="cardcollection-container">
     
      <div
      className="homepagecss"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          width: rows,
        }}
      >
        {cards.map((card, index) => (
         
          
            <div key={index} > {card} </div>

         
        ))}
      </div>
    </div>
  );
}

export default CardCollection;
