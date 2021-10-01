import React,{useState} from "react";
import Clock from "./Clock";

//react는 함수가 완전한 형태이길 원한다. return 필요.
//react는 함수도 javascript 함수와 다른 함수 구성을 쓰고 있다.
//매개변수 props 는 약속된 값이고 props는 컴퍼넌트가 랜더링될 때 어떻게 구성될 것인지를 결정.

function Header(props){
  const [title,setTitle]=useState("react study");
  const[titleStyle,settitleStyle]=useState({color:"blue"})
  //const title_style = {color:"blue"};
  
  const [clockMount,setClockMount] = useState("true"); 
  const nav_li_arr=[];
  const li_click_handle=function(e){
    let target_component = e.target.href.split("#")[1];
  }
  for(let i=0; i<props.nav_li.length;i++){
    //console.log(props.nav_li[i]);
    //react 는 jsx li element를 배열에서 출력할때 꼭 유니크한 키를 줘야함.
    nav_li_arr.push(<li key={"li_"+i}><a href={props.nav_li[i].url} onClick={li_click_handle}>{props.nav_li[i].text}</a></li>)
  }

  function titleClick(){
    //console.log("ddd")
    setTitle("title click!");
    settitleStyle({
      color:"red",
      border:"1px solid",
      background: "green"})
    //props.title="title click!"; 수정불가
  }
  
  //console.log(nav_li_arr);
  function deleteClock(){
    //console.log("Clock has been terminated.")
    setClockMount(false);
  };
  //{A && B} A=true이면  B도검사해서 B가 true면 출력.
  return (
    <header>
    <h1 style={titleStyle} onClick={titleClick}> {title}</h1>
    <nav>
      <ul>
        {nav_li_arr}
        
      </ul>
    </nav>
    {clockMount && <Clock text={new Date().toLocaleTimeString()}></Clock>}
    <button onClick={deleteClock}>Clock 삭제</button>
    </header>
  );    
}


export default Header; 