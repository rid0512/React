//Functional Component
import {ChangeEvent, useRef, useState} from 'react';

function FnCounter(){
    
   // let counter = 0
   const [counter, setCounter] = useState(0);
   //UseRef, we have input field and want an handle to input field [This is same as getelementbyId]
   const inputRef = useRef<HTMLInputElement>(null); //Type Annotations(HTMLInputElement) is specific t type script. 

    function inc(){
        console.log("inc invoked...") //inc and decr are callbacks, however we dont need to use it as arrow functions 
        //(we need it in asynchronous/functional programming because of the this keyword.It had an object. Here there is no object, so we can write it as arrow function. 
        //But it doesnt make a difference, you can write it as arrow function/normal function/statements)
      //  counter ++; //the value wont get incremented or decremented because it doesnt re render. Will be re-rendered in state
        console.log("counter:", counter); //it will print the incremented value in the console, but UI Doesnt get updated -> for this it should be in state
        setCounter(counter+1);
        //create State inside a Functional Component 
    }
    const decr = () => { //arrow function
        console.log("decr invoked...")
      //  counter --;
        console.log("counter:", counter);
        setCounter(counter-1);
    }

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => { //every event handler receives an event object which will contain the information about the event,can give evt:any(but not typesafe)
        const value = evt.target.value; //we dont need to declare if it was JS, Typescript we need to declare
        setCounter(Number(value));
    }

    function handleUpdate(){
        console.log("inputRef", inputRef) //handle to the input field
        setCounter(Number(inputRef.current?.value)); //while getting the value is always going to be a string so declare it
    }

    return(
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick = {inc}>++ve</button>&nbsp;
                <button onClick = {decr}>--ve</button>&nbsp;
            </div>
            <div>
                {/*controlled input* value and onchange*/}
                Counter: <input type="number" value={counter} onChange={handleChange}/>
            </div>
            <div>
                {/*uncontrolled input* we use reference*/}
                Update Counter: <input ref = {inputRef} type = "number" defaultValue={counter}/>&nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default FnCounter;