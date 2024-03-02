import { useEffect, useState } from "react";
import "../styles/Board.css";
import uniqid from "uniqid";
import confetti from "canvas-confetti";

import aluminum from "../img/Aluminum.svg";
import bendalloy from "../img/Bendalloy.svg";
import brass from "../img/Brass.svg";
import bronze from "../img/Bronze.svg";
import cadmium from "../img/Cadmium.svg";
import chromium from "../img/Chromium.svg";
import copper from "../img/Copper.svg";
import duralumin from "../img/Duralumin.svg";
import electrum from "../img/Electrum.svg";
import gold from "../img/Gold.svg";
import iron from "../img/Iron.svg";
import nicrosil from "../img/Nicrosil.svg";
import pewter from "../img/Pewter.svg";
import steel from "../img/Steel.svg";
import tin from "../img/Tin.svg";
import zinc from "../img/Zinc.svg";

import { Square } from "./Square";
const IMAGES = [
  <img src={aluminum} id={uniqid()} alt="icon"></img>,
  <img src={bendalloy}  id={uniqid()} alt="icon"></img>,
  <img src={brass} id={uniqid()} alt="icon"></img>,
  <img src={bronze}  id={uniqid()} alt="icon"></img>,
  <img src={cadmium}  id={uniqid()} alt="icon"></img>,
  <img src={chromium}  id={uniqid()} alt="icon"></img>,
  <img src={copper}  id={uniqid()} alt="icon"></img>,
  <img src={duralumin}  id={uniqid()} alt="icon"></img>,
  <img src={electrum}  id={uniqid()} alt="icon"></img>,
  <img src={gold}  id={uniqid()} alt="icon"></img>,
  <img src={iron} id={uniqid()} alt="icon"></img>,
  <img src={nicrosil} id={uniqid()} alt="icon"></img>,
  <img src={pewter} id={uniqid()} alt="icon"></img>,
  <img src={steel} id={uniqid()} alt="icon"></img>,
  <img src={tin}  id={uniqid()} alt="icon"></img>,
  <img src={zinc}  id={uniqid()} alt="icon"></img>,
];

export const Board = () => {
  const [cardArray, setCardArray] = useState(IMAGES);
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [memoryArray, setMemoryArray] = useState([]);
  
  const handleClick = (e) => {
    if(memoryArray.includes(e.target.id)){
        if (points > maxPoints) setMaxPoints(points)
        setPoints(0);
        setMemoryArray([]);
    } else {
        let newMemoryArray = memoryArray.concat(e.target.id);
        setMemoryArray(newMemoryArray);
        setPoints(points + 1);
    }
  };

  const cards = cardArray.map((card) => {
    return <Square img={card} click={handleClick} key={uniqid()}></Square>;
  });

  const shuffleCards = () => {
    let newArray = [...cardArray];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    setCardArray(newArray);
  };

  useEffect(() => {
    shuffleCards();
    if (points === 16) {
      confetti();
      setMaxPoints(points);
  };
  }, [points]);

  return (
    <div>
      <div className="punctuation">
        <h5>Points: {points}</h5>
        <h5>Max points: {maxPoints}</h5>
      </div>
      
      <div className="Board">{cards}</div>
    </div>
  );
};
