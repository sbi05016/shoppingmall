import {GoodsCpn , TabContent,ErrorCpn} from '../components/cpn.js';
import { Outlet, useParams } from 'react-router-dom';
import {uesParams} from "react-router-dom";
import styles from '../csszip/context.module.css';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Loading} from '../spinner.js';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {CSSTransition} from "react-transition-group";
import _ from 'lodash';



const st = classnames.bind(styles)

const HomePage=({shoes,setShoes})=>{

  let [buttonclick,buttonSetclick] = useState(0);
  let localStoragedata = ''

  useEffect(()=>{
    if(localStorage.data == 'undefined'){
      localStorage.removeItem('data')===undefined?localStorage.setItem('data',JSON.stringify( [] )):
      localStorage.removeItem('data')
      localStorage.setItem('data',JSON.stringify( [] ))}       
    if(localStorage.data.length<2){
    localStorage.setItem('data',JSON.stringify( [] ))
  }
  else{console.log('')}
  },[])
  
  let itemList = localStorage.getItem('data')
  itemList = JSON.parse(itemList)
  
  
  return(
  <div>
    
    <div className='main-banner'></div>
    <div>
        <h3 className={st('sidebar-title')}>최근 본 상품</h3>   
    </div>
    <div className={st('sidebar')}>
      
          {localStorage.data!=undefined?
            (itemList=_.uniqBy(itemList, "id"),
            itemList.map((item,i)=>  
            <div className={st('itemList')} key={item.id}>        
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        :localStorage.setItem('data',JSON.stringify([]))}    
    </div>

    <div className="container">
    <img className={styles.bg} src={process.env.PUBLIC_URL +"/shoes.png"}/>
{/* ------------------------------------------------------------------------------------------------------- */}
    

      <div className="row">
      {
        shoes.map((goods,i)=>{return(     
        <div className="col-md-4" key={goods['id']}>
        <GoodsCpn  goods = {goods} i = {i}/> </div>)
      }
          )            
        }
      {buttonclick == 0?  
      <button onClick={()=>{
          axios.get('http://codingapple1.github.io/shop/data2.json'
          ).then((result)=>{
            let copy = [...shoes, ...result.data];  
            setShoes(copy);         
            buttonSetclick(buttonclick+1)})
            
                }}>버튼</button>
        :buttonclick == 1?
        <button onClick={()=>{     
          axios.get('http://codingapple1.github.io/shop/data3.json'
          ).then((result)=>{
            let copy = [...shoes, ...result.data];
            setShoes(copy);
            buttonSetclick(buttonclick+1)
            console.log(buttonclick)})
                }}>버튼</button>
        :buttonclick == 2?
        <button onClick={()=>{                 
            buttonSetclick(buttonclick+1)           
                }}>버튼</button>
        :buttonclick == 3? alert('경고')
        :null
      }

      </div>
    </div>
  </div>)}
//---------------------------------------------------




//----------------------------------------------------------
const AboutPage=()=>{return(
    <div className={st('ex')}>
      <h4>회사정보</h4>
      <Outlet/>
    </div>
  )
}
//--------------------------------------------------------


export  {HomePage,AboutPage}