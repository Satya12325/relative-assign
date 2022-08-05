import React from "react";
import "./Cards.css";
import Bitcoin from "../Image/BitcoinSV.svg";
import EthereumETH from "../Image/EthereumETH.svg";
import BinanceCoin from "../Image/BinanceCoin.svg";
import Solana from "../Image/Solana.svg";
 interface CardsProps {
  // arr:[
  //   {
  //     title:string,
  //     logo:string,
  //     value:string,
  //     growth:number,
  //   }
  // ]
  title?:string;
  logo?:string;
  value?:string;
  growth:number;
 }

const Cards: React.FC<CardsProps> = ({title, logo, value, growth}) => {
  var coins = [Solana, EthereumETH, BinanceCoin];
  
  // const [{title,logo,value,growth}] = arr;
  var Style={}
  if(growth < 0)
    {
         Style = {
           color: 'red'
          
        }
    }

    var background = {}
    if(title === "Shiba Inu (SHIB)"){
      background = {
        backgroundColor:"#251A29"
      }
    }
    else if(title === "Solana (SOL)"){
      background = {
        backgroundColor:"#25193E"
      }
    }
      else if(title === "Ethereum (ETH)"){
        background = {
          backgroundColor:"#272A3D"
        }
      }
        
  return (
    <div style={{}}>
      <div className="w-56 h-80 backColor">
        <div className="Icons"></div>
        <div style={background} className="h-24 w-24 rounded-full bgColor border-8 border-slate-900 flex items-center justify-center circleCird">
          <img src={logo} className="h-10 w-10" />
        </div>
        <div className="title">{title}</div>
        <div className="m-auto flex w-40 rounded-xl justify-evenly bg-slate-900 ">
          <h4 className="Text">{value}</h4>
          <p className="Para" style={Style}>{growth}%</p>
        </div>
        <div className="title2">Price</div>
        <div className="m-auto flex w-40 rounded-xl justify-evenly bg-slate-900 ">
          <h4 className="Text">$60,000</h4>
        </div>
        <div className="title2">TVL</div>
        <div className="m-auto flex w-40 rounded-3xl justify-evenly p-2" style={{background:"#14172B"}}>
          {coins.map((item) => (
            <img src={item} className="h-6 w-6" />
          ))}
        </div>
        <div className="title2">popular pairs</div>
      </div>
    </div>
  );
};

export default Cards;
