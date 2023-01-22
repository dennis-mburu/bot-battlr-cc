import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { Route, Routes } from "react-router-dom";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [bot, setBot] = useState({});

  function handleAddToYourBots(id) {
    setBot(bots.find((bot) => bot.id === id));
  }

  function addToCollection(id) {
    const result = yourBots.find((bot) => bot.id === id);
    const yourNewBot = bots.find((bot) => bot.id === id);

    if (result === undefined) {
      setYourBots([...yourBots, yourNewBot]);
    }
  }

  function handleYourBotDelete(id) {
    setYourBots(yourBots.filter((bot) => bot.id !== id));
  }

  function handleBotDelete(id) {
    setBots(bots.filter((bot) => bot.id !== id));
    setYourBots(yourBots.filter((bot) => bot.id !== id));
  }

  function handleSortChange(sortValue) {
    setBots(
      bots.sort((a, b) => {
        return a[sortValue] - b[sortValue];
      })
    );
  }

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <YourBotArmy yourBots={yourBots} onYourBotDelete={handleYourBotDelete} />
      <Routes>
        <Route
          path="/bots/:id"
          element={<BotSpecs bot={bot} addToCollection={addToCollection} />}
        />
        <Route
          path="/"
          element={
            <BotCollection
              bots={bots}
              onAddToYourBots={handleAddToYourBots}
              onDeleteBot={handleBotDelete}
              onSortChange={handleSortChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default BotsPage;
