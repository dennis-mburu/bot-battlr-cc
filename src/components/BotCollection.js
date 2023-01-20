import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddToYourBots, onDeleteBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard bot={bot} key={bot.id} onAddToYourBots={onAddToYourBots} onDeleteBot={onDeleteBot}/>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
