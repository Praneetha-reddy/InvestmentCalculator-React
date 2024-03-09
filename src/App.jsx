import Form from "./Components/Form";
import Header from "./Components/Header";
import { useState } from "react";
import Result from "./Components/Result";

function App() 
{
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
  });
  const isInputValid = userInput.duration >= 1;
  function userInputHandler(inputType, inputValue) 
  {
    setUserInput((prevInputValues) => 
    {
      return { ...prevInputValues, [inputType]: Number(inputValue) };
    });
  }

  return (
    <>
      <Header />
      <Form onChange={userInputHandler} input={userInput} />
      {isInputValid && <Result input={userInput}></Result>}
      {!isInputValid && <p className="center">Please enter a valid duration.</p>}
    </>
  );
}

export default App;
