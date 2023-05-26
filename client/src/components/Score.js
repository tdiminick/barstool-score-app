import React from "react";
import '../css/App.css';

function Score({gameStats}) {
    let awayScore = 0, homeScore = 0;

    if (gameStats.league === "MLB") {
        awayScore = gameStats.away_batter_totals.runs;
        homeScore = gameStats.home_batter_totals.runs;
    } else if (gameStats.league === "NBA") {
        awayScore = gameStats.away_totals.points;
        homeScore = gameStats.home_totals.points;
    }

    // if I had an api guide, could implement period/inning states
    let gameState = 'Final';

    return ( 
        <div className="scorebox-container">
            <div className="flexbox">
                <div className={`team-name ${gameStats.away_team.abbreviation}`}>
                    {gameStats.away_team.abbreviation}
                    <div className="subtitle">
                        {gameStats.away_team.full_name}
                    </div>
                </div>
                <div className="game-state">
                    {/* this would be the time left in the period or the count in baseball */}
                </div>
                <div className={`team-name ${gameStats.home_team.abbreviation}`}>
                    {gameStats.home_team.abbreviation}
                    <div className="subtitle">
                        {gameStats.home_team.full_name}
                    </div>
                </div>
            </div>
            <div className="flexbox">
                <div className="score">
                    {awayScore}
                </div>
                <div className="game-state">
                    {gameState}
                </div>
                <div className="score">
                    {homeScore}
                </div>
            </div>
        </div>
    )
}

export default Score;
