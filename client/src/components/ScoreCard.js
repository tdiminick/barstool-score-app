import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css';

function ScoreCard({scoreboard}) {
  return (
    <div className="scoreboard-card">
        <div className="scoreboard-scoreline">
          <div className={`scoreboard-team ${scoreboard.away_team}`}>{scoreboard.away_team}</div>
          <div className="scoreboard-score">{scoreboard.away_team_score}</div>
        </div>
        <div className="scoreboard-scoreline">
          <div className={`scoreboard-team ${scoreboard.home_team}`}>{scoreboard.home_team}</div>
          <div className="scoreboard-score">{scoreboard.home_team_score}</div>
        </div>
        <div className="scoreboard-gamestate">
          {scoreboard.game_state}
        </div>
        <div className="scoreboard-openMore">
          <Link to={`/game/${scoreboard.game_id}`}>See Game Stats</Link>
        </div>
    </div>
  );
}

export default ScoreCard;
                                                                                                                                                                             