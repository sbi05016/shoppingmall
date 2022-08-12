import {GoodsCpn , TabContent,ErrorCpn} from '../components/cpn.js'
import { Outlet, useParams } from 'react-router-dom'
import {uesParams} from "react-router-dom";
import styles from '../csszip/context.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Loading} from '../spinner.js'
import { Nav, Navbar, Container } from 'react-bootstrap';
import {CSSTransition} from "react-transition-group"
import classnames from 'classnames/bind'
import { useSelector,useDispatch } from 'react-redux';
import {increase, order} from '../store/buyListStore.js';



const st = classnames.bind(styles)


const DetailPage=(props)=>{

  let [time,setTime] = useState(true);
  let [inp,setInp] = useState('');
  let [tab,setTab] = useState(0);
  let [fade,setFade] = useState(0);
  let {id} = useParams();
  let finded = props.shoes.find(function(x){return (
    x.id==id? x.id==id : null 
    )});
  
  let dispatch = useDispatch()
  let buyList = useSelector((state)=>state.buyList)
  
  //-------------------------------------------------------------------------------
  useEffect(()=>{setTimeout(()=>{setTime(false)},2000)},[]
  );
  useEffect(()=>{
    if (isNaN(inp) == true){
      alert('경고')
    }
  },[inp])
  
  useEffect(()=>{
    setTimeout(()=>{setFade(1)},100)
    return ()=>{setFade(0)}
  },[tab])
  
  useEffect(()=>{
    let updateData = localStorage.getItem('data')
    updateData = JSON.parse(updateData)
    updateData.push(finded)
    localStorage.setItem('data',JSON.stringify(updateData))
  },[])
  
  
//----------------------------------------------------------
    return(
  <div className="container">
    {time == false?null:<div className="alert alert-danger">
      2초이내 구매시 할인
    </div>}
        {finded != null ?
        <div className="row">
          <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${finded.id+1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6 mt-4" id={styles.detail}>
            <input type="text" onChange={(e)=>{ 
              setInp(e.target.value)
            }} />
            
            
            <h4 className="pt-5">{finded.title}</h4>
            <p>{finded.content}</p>
            <p>{finded.price}원</p>
            
            
            
            
            <button onClick={()=>{
              let index = buyList.findIndex((a)=>a.id === finded.id)
              
              index ==-1? dispatch(order(finded)):

              dispatch(increase(finded.id))
              
              
            }} className="btn btn-danger">주문하기</button>       
        </div>
        </div>
        :<ErrorCpn/>}
  
        <Nav variant="tabs" defaultActiveKey="like0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>q</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>q1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>q2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} fade={fade}/>      
  </div>)
  
  




  };

  export default DetailPage