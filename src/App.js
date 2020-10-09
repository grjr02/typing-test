import React,  {useState, useEffect}  from 'react';
import './App.css';
import Timer from "./components/Timer";
// import TextBox from "./components/TextBox";
import DynamicInput from "./components/DynamicInput";


function App() {

  const [text, setText ] = useState(`This is a sentence within a text box. This sentence isn't too long. But is it long enough.
  A few more lines will be added to make sure. Sure enough 
  That the sentence will wrap.`);

  const [valid, setValid] = useState('');
  const [invalid, setInvalid] = useState('');
  const [unVisited, setUnvisited] = useState(text);
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
  }, [textArray])

  const compare = (x) => {
    // let j = 0;
    // for(let i = 0; i < x.length; i++){
    //   if(x.charAt(i) === text.charAt(i)){ j++; continue;}
    //   else break;
    // }

    // if(x.length <= 0) return;

    // setValid(text.substring(0,j));
    // // console.log(valid)
    // if(j !== x.length) setInvalid(text.substring(j,x.length)); 
    // setUnvisited(text.substring(x.length));
  }


  return (
    <>
    <Timer/>
      <div className="textbox">
          <p className="text">
              {/* <span style={{background: 'lightgreen'}}> 
              {valid}
              </span >
              <span style={{background: 'pink'}}> 
              {invalid}
              </span>
              <span>
              {unVisited}
              </span> */}
          </p>
      </div>
    <DynamicInput text={compare}/>
    </>
  );
}

export default App;
