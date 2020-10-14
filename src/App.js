import React,  {useState, useEffect}  from 'react';
import './App.css';
import Timer from "./components/Timer";
// import TextBox from "./components/TextBox";
import DynamicInput from "./components/DynamicInput";

function App() {

  const [text] = useState(`This is a sentence within a text box. This sentence isn't too long. But is it long enough.
  A few more lines will be added to make sure. Sure enough 
  That the sentence will wrap.`);

  const [unVisited, setUnvisited] = useState(text);
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
  }, [textArray])

  const compare = (x) => {

    const arr = [];
    let equals = true;
    let j = 0;

    for(let i = 0; i < x.length; i++){
      if(x.charAt(i) !== text.charAt(i) && equals){
        arr.push({ text: text.substring(j,i), valid: 1 });
        j=i;
        equals = false;
      }else if(x.charAt(i) === text.charAt(i) && !equals){
        arr.push({ text: text.substring(j,i), valid: 0 });
        j=i;
        equals = true;
      }
    }
    if(equals) arr.push({ text: text.substring(j,x.length), valid: 1 });
    else arr.push({ text: text.substring(j,x.length), valid: 0 });

    setTextArray(arr);
    console.log(text);
    console.log(textArray);

    setUnvisited(text.substring(x.length));
  }

  return (
    <>
    <Timer/>
      <div className="textbox">
          <p className="text">

            {textArray.map((x) => (

              x.valid % 2 === 1 ?

              <span style={{background: 'lightgreen'}}>{x.text}</span>
              : 
              <span style={{background: 'pink'}}>{x.text}</span>

            ))}

            {<span>
              {unVisited}
            </span>}

          </p>
      </div>
    <DynamicInput text={compare}/>
    </>
  );
}

export default App;
