/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];

const gif = [
  "https://media.tenor.com/4YPsvsvNG7sAAAAi/bear.gif",
  "https://media.tenor.com/fdw8rLrCwjMAAAAi/scared-shivering.gif",
  "https://media.tenor.com/IUvV1AjqwOgAAAAi/tkthao219-bubududu.gif",
  "https://media.tenor.com/KnQY1gWdatQAAAAi/tkthao219-bubududu.gif",
  // "https://media.tenor.com/-22Gx8sfLqcAAAAi/line.gif",
  "https://media.tenor.com/sVhrICg27ToAAAAi/tkthao219-bubududu.gif"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const [gef, setGef] = useState(0);

  function handleNoClick() {
    setNoCount(noCount + 1);
    handleGef()
  }

  function handleGef() {
    if (gef === gif.length - 1) {
      setGef(1)
      return
    }
    setGef(gef + 1)
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount === phrases.length ? 0 : noCount, phrases.length - 1)];
  }

  return (

    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            className="img_after"
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            className="img_before"
            alt="bear with hearts"
            // src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            // src="https://media.tenor.com/4YPsvsvNG7sAAAAi/bear.gif"
            src={gif[gef]}
          />

          <div className="textAkhh">
            I like you, do you want to get to know each other more deeply from now on?
          </div>
          {/* <div
            className="btnlayout"
          > */}
          <div
            className="btnlayout"
            style={
              noCount >= 3 && window.innerWidth <= 500 ? { flexDirection: 'column' } : { flexDirection: 'row' }
            }
          >
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
