import React,{Component} from "react";

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={
      process:"0",
      result:"0",
      nums:[],
      opeators:[],
      currentNum:""
    };
    this.addToInput.bind(this);
  }
  addToInput(e){
    let current_value= this.state.currentNum+""+e.target.value
    console.log(current_value);
    this.setState({currentNum: current_value});
  }
  Reset(){

  }
  Clear(){

  }
  Erase(){
    
  }
  render(){
    return(
      <div id="calculator">
        <div>
          <p><textarea name="cal_process" value={this.state.process} cols="20" rows="1"></textarea></p>
          <p><textarea name="cal_result" value={this.state.currentNum} cols="20" rows="1"></textarea></p>
          <tr>
            <td><button>%</button></td>
            <td><button onClick={()=>this.Reset()} value="CE">CE</button></td>
            <td><button onClick={()=>this.Clear()} value=" ">C</button></td>
            <td><button onClick={()=>this.Erase()} value="E">Back</button></td>
          </tr>
          <tr>
            <td><button onClick={(e)=>this.addToInput(e)} value="7">7</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="8">8</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="9">9</button></td>
            <td><button onClick={()=>this.devide()} value="/">/</button></td>
          </tr>
          <tr>
            <td><button onClick={(e)=>this.addToInput(e)} value="4">4</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="5">5</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="6">6</button></td>
            <td><button onClick={()=>this.multiply()} value="*">*</button></td>
          </tr>
          <tr>
            <td><button onClick={(e)=>this.addToInput(e)} value="1">1</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="2">2</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="3">3</button></td>
            <td><button >-</button></td>
          </tr>
          <tr>
            <td><button>~</button></td>
            <td><button onClick={(e)=>this.addToInput(e)} value="7">0</button></td>
            <td><button>~</button></td>
            <td><button >+</button></td>
          </tr>
          <tr>
            <td><button>~</button></td>
            <td><button>~</button></td> 
            <td><button>~</button></td>
            <td><button >=</button></td>
          </tr>
        </div>
      </div>
    );
  }

}





export default Calculator;
