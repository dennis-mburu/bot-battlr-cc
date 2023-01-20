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

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <YourBotArmy yourBots={yourBots} />
      <BotCollection bots={bots} onAddToYourBots={handleAddToYourBots} />
    </div>
  );
}

export default BotsPage;
