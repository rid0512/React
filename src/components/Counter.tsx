import { Component, ReactNode} from "react";
type Counterprops={
    value:number
    title?:string
}
//class based component
class Counter extends Component<Counterprops>{ //class function, an instance is always created. To write instance we use this keyword
    // counter:number=0;
    state={
        counter:0,
        message: "hello" //dont put everything int state, use it judicially, only info that you want to display to the user should be displayed
    }
    constructor(props:Counterprops){
        super(props);
        this.state.counter=this.props.value;
 
    }
    // inc()
    // {
    //     console.log("inc invoked");
    //     // this.props.value++; //props is read only so we cannot change it
    //     this.counter++; //why is this coming undefined?
       
    // }
    inc =() =>{
        console.log("inc invoked");
        // this.props.value++; //props is read only so we cannot change it
        // this.state.counter++; //never modify state directly
        //this.setStete takes a slice of state and merges it with the existing state -> Its not the complete state. if we give message, only counter changes, message remains as it is.
        this.setState({
            counter:this.state.counter+1
        }); //setState is asynchronous and has to be re rendered properly
        //callback(invoked after the state is updated)
        console.log("counter",this.state.counter); //print value of counter
    }

    decr = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render(){
        return(
            <div>
                <h4>Counter: {this.state.counter} {this.props.title}</h4>
                <p>This is a class based component</p>
                <div>
                    <button onClick={this.inc}>Inc</button> &nbsp;
                    <button onClick={this.decr}>Decr</button> &nbsp;
                </div>
            </div>
 
        )
    }
}
 
export default Counter;