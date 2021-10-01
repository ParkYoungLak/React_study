import React,{Component} from "react";
//Clock.__proto__ = React.prototype

class Clock extends React.Component{
  constructor(props){
    console.log("a")
    super(props)
    this.state ={dateText: new Date().toLocaleTimeString()};
    //setState 로 전환가능.
    this.setDateText=this.setDateText.bind(this); 
    
  }
  componentDidMount(){
    this.dateInterval= window.setInterval(()=>{this.setDateText()},1000);
  }
  componentWillUnmount(){
    console.log("Clock has been terminated.");
    window.clearInterval(this.dateInterval);
  }
  setDateText(){
    console.log("tic toc");
    this.setState({dateText: new Date().toLocaleTimeString()});
  }


  render(){
    return(
    <div id="digitalClock">
      <div>{this.state.dateText}</div>
    </div>
    );
  }
}

export default Clock;