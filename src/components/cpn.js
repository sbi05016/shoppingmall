import styles from '../csszip/cpn.module.css';
import {Loading} from '../spinner'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';
import classNames from 'classnames/bind';


const cn = classNames.bind(styles)

const GoodsCpn=(props)=>{
  let navigate = useNavigate()
  let [loading,setLoading] = useState(true);
  
  
  useEffect(()=>{setLoading(false);},[props.shoes])

  return(loading?(<Loading/>):
    <div >
    {props.i == 0? <img onClick={()=>{navigate(`/detail/${Number(props.i)}`);
    }} src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>:
    props.i == 1?<img onClick={()=>{navigate(`/detail/${Number(props.i)}`);
  }} src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>:
    props.i== 2? <img onClick={()=>{navigate(`/detail/${Number(props.i)}`);
    }} src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>:0}
    <h4>{props.goods['title']}</h4>
    <p>{props.goods['content']}</p>
    <p>{props.goods['price']}</p>
    </div>)
    }
    


const TabContent=({tab,fade})=>{
  let tabData = useSelector((state)=>{return state.tabData})
  return (<div className={cn('start',{'end':fade})}>
          {tab==0? tabData[0]:
          tab==1? tabData[1]:
          tab==2? tabData[2]:null}</div>)
}

const ErrorCpn= ()=>{
  return(
    <div className={styles.errorpage}>
      <p>404 page</p>
    </div>
  )
}
export {GoodsCpn,TabContent, ErrorCpn}