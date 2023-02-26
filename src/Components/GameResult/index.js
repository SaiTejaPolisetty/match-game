import './index.css'

const GameResult = props => {
  const {score, playAgainFunc} = props

  return (
    <div className="game-result-container">
      <div className="game-result-content-container">
        <div className="game-result-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
            alt="trophy"
            className="trophy-img"
          />
        </div>
        <div className="game-result-text-container">
          <p className="game-result-heading">YOUR SCORE</p>
          <p className="final-score">{score}</p>
          <button
            className="play-again-btn"
            type="button"
            onClick={playAgainFunc}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="play-again-logo"
            />
            <p className="play-again-text">PLAY AGAIN</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameResult
