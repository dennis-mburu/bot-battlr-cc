import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  function handleAddToYourBots(id) {
    const result = yourBots.find((bot) => bot.id === id);
    const yourNewBot = bots.find((bot) => bot.id === id);

    if (result === undefined) {
      setYourBots([...yourBots, yourNewBot]);
    }
  }

  function handleYourBotDelete(id){
    setYourBots(yourBots.filter(bot => bot.id !== id))
  }

  function handleBotDelete(id){
    setBots(bots.filter(bot => bot.id !== id ))
    setYourBots(yourBots.filter(bot => bot.id !== id ))
  }

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <YourBotArmy yourBots={yourBots} onYourBotDelete={handleYourBotDelete}/>
      <BotCollection bots={bots} onAddToYourBots={handleAddToYourBots} onDeleteBot={handleBotDelete}/>
    </div>
  );
}

export default BotsPage;
