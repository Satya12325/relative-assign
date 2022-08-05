import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Components/Cards";
import Activity from "./Image/activity.svg";
import Bitcoin from "./Image/BitcoinSV.svg";
import Ethereum from "./Image/Ethereum.svg";
import BinanceCoinBNB from "./Image/BinanceCoinBNB.svg";
import SHIBAINU from "./Image/SHIBAINU.svg";
import SolanaSOL from "./Image/SolanaSOL.svg";

function App() {
   const arr = [
    {
      title: "Bitcoin (BTC)",
      logo:Bitcoin,
      value: "$31,812.80",
      growth:+10,

    },
    {
      title: "Solana (SOL)",
      logo:SolanaSOL,
      value: "$32.83",
      growth:-12.32,

    },
    {
      title: "Ethereum (ETH)",
      logo:Ethereum,
      value: "$1,466.45",
      growth:-11.93,

    },
    {
      title: "Binance USD (BUSD)",
      logo:BinanceCoinBNB,
      value: "$1.00",
      growth:+0.26,

    },
    {
      title: "Shiba Inu (SHIB)",
      logo:SHIBAINU,
      value: "$0.00001948",
      growth:-8.1,

    },
   ]

  return (
    <div className="App h-screen bg-slate-900">
      <div className="" style={{height:"95vh"}}>
        <div className="m-20 flex w-40 gap-4">
          <img src={Activity}/>
          <p className="Text">trending Assets</p>
        </div>
      <div className="flex gap-9 flex-wrap bg-slate-900 items-center">
        
        {
          arr?.map((item)=>(
            <Cards {...item}/>
          ))
        }
      </div>
      </div>
    </div>
  );
}

export default App;
