//react는 함수가 완전한 형태이길 원한다. return 필요.
//react는 함수도 javascript 함수와 다른 함수 구성을 쓰고 있다.
//매개변수 props 는 약속된 값이고 props는 컴퍼넌트가 랜더링될 때 어떻게 구성될 것인지를 결정.
function Header(props){
  const nav_li_arr=[];
  for(let i=0; i<props.nav_li.length;i++){
    //console.log(props.nav_li[i]);
    //react 는 jsx li element를 배열에서 출력할때 꼭 유니크한 키를 줘야함.
    nav_li_arr.push(<li key={"li_"+i}><a src={props.nav_li[i].url}>{props.nav_li[i].text}</a></li>)
  }
  console.log(nav_li_arr);
  return (
    <header>
    <h1>{props.title}</h1>
    <nav>
      <ul>
        {nav_li_arr}
        
      </ul>
    </nav>
    </header>
  );    
}


export default Header; 