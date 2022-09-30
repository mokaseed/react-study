import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwhichShowFlag = () => {
    setShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwhichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(˙◁˙)</p>}
    </>
  );
};

export default App;
