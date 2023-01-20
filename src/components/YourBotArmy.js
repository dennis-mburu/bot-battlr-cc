import React from "react";
import YourBotCard from "./YourBotCard";

function YourBotArmy({ yourBots }) {
  //your bot army code here...
  console.log(yourBots)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBots.map((bot) => (
            <YourBotCard bot={bot} key={bot.id} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
