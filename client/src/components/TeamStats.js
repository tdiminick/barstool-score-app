import React from "react";
import '../css/App.css';

function TeamStats({gameStats}) {
    // this could be a user preference, or standard from us, etc
    let statsToDisplay, awayStats = {}, homeStats = {};
    if (gameStats.league === "MLB") {
        statsToDisplay = ["runs", "plate_appearances", "at_bats", "hits", "singles", "doubles", "triples", "home_runs", "walks", "strike_outs"]
        statsToDisplay.forEach(stat => {
            awayStats[stat] = gameStats.away_batter_totals[stat];
            homeStats[stat] = gameStats.home_batter_totals[stat];
        });
    } else if (gameStats.league === "NBA") {
        statsToDisplay = ["points", "assists", "turnovers", "steals", "blocks", "offensive_rebounds", "defensive_rebounds"]
        statsToDisplay.forEach(stat => {
            awayStats[stat] = gameStats.away_totals[stat];
            homeStats[stat] = gameStats.home_totals[stat];
        });
    }

    // would put this is some sort of utility file/class in a larger environment
    function humanize(str) {
        var i, frags = str.split('_');
        for (i=0; i<frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
      }

    return ( 
        <div className="teamstats-container">
            <div className="stats-header">Team Stats</div>
            <div className="stat-line-container">
                <div className="stat-line header">
                    <div className={`stat-total ${gameStats.away_team.abbreviation}`}>
                        {gameStats.away_team.abbreviation}
                    </div>
                    <div className="stat-name">
                    </div>
                    <div className={`stat-total ${gameStats.home_team.abbreviation}`}>
                        {gameStats.home_team.abbreviation}
                    </div>
                </div>
                {statsToDisplay.map((stat, idx) => (
                    <div key={idx} className="stat-line">
                        <div className="stat-total">
                            {awayStats[stat]}
                        </div>
                        <div className="stat-name">
                            {humanize(stat)}
                        </div>
                        <div className="stat-total">
                            {homeStats[stat]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamStats;
