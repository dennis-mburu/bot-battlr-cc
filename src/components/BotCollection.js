import React from "react";
import BotCard from "./BotCard";
import FilterBar from "./FilterBar";
import SortBar from "./SortBar";

function BotCollection({ bots, onAddToYourBots, onDeleteBot, onSortChange }) {
  // Your code here
// console.log(bots)

  return (
    <>
    <div className="sort-container">
    <SortBar onSortChange={onSortChange}/>
    <FilterBar />
    </div>
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard bot={bot} key={bot.id} onAddToYourBots={onAddToYourBots} onDeleteBot={onDeleteBot}/>
        ))}
        Collection of all bots
      </div>
    </div>
    </>
  );
}

export default BotCollection;
