import React, { useState, useEffect } from "react";
import './home.css'
import immg from '../../assets/imgpost/imgpostt.jpg'
import CardComponent from "../../components/cardComponent/CardComponent";
import CardItem from "../../components/CardCollections/CardItem";
import CardCollection from "../../components/CardCollections/CardCollection";
const PuzzlePiece = ({ image, isFlipped, handleClick }) => {
    const [flipped, setFlipped] = useState(isFlipped);
    const handleFlip = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div
        className={`puzzle-piece ${flipped ? "flipped" : ""}`}
        onClick={() => handleClick(handleFlip)}
      >
        <div className="puzzle-piece-front">
          <img src={immg} alt="puzzle piece" />
        </div>
        <div className="puzzle-piece-back"></div>
      </div>
    );
}
function Home () {
   

  return (
    <div className="puzzle-container" style={{margin :"10px 10px"}}>
   <CardCollection />
   </div>
  );
};

export default Home;