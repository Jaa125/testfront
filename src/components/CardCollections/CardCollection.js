import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import './card.css'
const height = 100;
  const width = 100;
function CardCollection() {
  const [numberOf, setNumberOfPieces] = useState(100);

  const cards = [];
  
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

        cards.push(
          <CardItem
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
      {/* <form className="formcard">
        <label htmlFor="pieces">Enter the number of pieces:</label>
        <input
          type="number"
          id="pieces"
          name="pieces"
          value={numberOf}
          onChange={(e) => setNumberOfPieces(e.target.value)}
        />
        <p>
          Rows: {rows} Columns: {columns}
        </p>
      </form> */}
      <div
      className="homepagecss"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          width: rows,
        }}
      >
        {cards.map((card, index) => (
          <div key={index}> {card} </div>
        ))}
      </div>
    </div>
  );
}

export default CardCollection;