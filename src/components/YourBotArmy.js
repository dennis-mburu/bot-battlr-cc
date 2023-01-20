import React from "react";
import YourBotCard from "./YourBotCard";

function YourBotArmy({ yourBots, onYourBotDelete }) {
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBots.map((bot) => (
            <YourBotCard bot={bot} key={bot.id} onYourBotDelete={onYourBotDelete}/>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
