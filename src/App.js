import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [inputEmoji, setEmoji] = useState("");
  function inputEmojiHandler(event) {
    setEmoji(emojiDictionary[event.target.value]);
    if (emojiDictionary[event.target.value] === undefined) {
      setEmoji("Sorry, We don't have this emoji in our database.");
    }
  }
  var emojiDictionary = {
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🦮": "Guide Dog",
    "🐕‍🦺": "Service Dog",
    "🐩": "Poodle",
    "🐕": "Dog",
    "🐈": "Cat",
    "🐅": "Tiger",
    "🐆": "Leopard",
    "🐎": "Horse"
  };
  var emojisWeKnow = Object.keys(emojiDictionary);
  function emojiClickHandler(emoji) {
    setEmoji(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Animojis👀</h1>
      <h2>
        This is an <span className="highlighted-text">Animal Emoji</span>{" "}
        Interpreter.
      </h2>
      <input placeholder="Enter an Animal Emoji" onChange={inputEmojiHandler} />
      <br />
      <h4 className="output">{inputEmoji}</h4>
      {emojisWeKnow.map((emoji) => (
        <p
          key={emoji}
          className="emojis"
          onClick={() => emojiClickHandler(emoji)}
        >
          {emoji}
        </p>
      ))}
      <p>
        If you don't know which emoji depicts what animal then this app is your
        Rescue! It shows you the meaning of the emoji when you type it in the
        Inputbar. <br /> You can also just click on the emojis diplayed below
        the Inputbar.{" "}
      </p>
      <p className="credit">
        Made by{" "}
        <a target="_blank" href="https://rishiverma.netlify.app/">
          Rishi Verma
        </a>
        .
      </p>
    </div>
  );
}
