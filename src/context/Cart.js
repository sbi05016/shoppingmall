import { Table } from "react-bootstrap"
import {  useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import classNames from "classnames/bind"
import styles from "../csszip/Cart.module.css"
import {ageCount} from "../store/userStore.js"
import {buyListDeSort,deleteOrder ,buyListSort, increase} from "../store/buyListStore.js"

const cn = classNames.bind(styles)


const CartPage=()=>{
  let user = useSelector((state)=>state.user);
  let buyList = useSelector((state)=>state.buyList);
  let dispatch = useDispatch()
  let [sorted,setSorted] = useState(true)
  return(
    <div>
    
    <h4 className={cn('cartTitle')}>{user.name}의 장바구니 <br/> 그의 나이는 {user.age}</h4>
    <button onClick={()=>{dispatch(ageCount())}} className={cn('qwebtn') }>button</button>
    <button onClick={()=>{return(
                          sorted == true?
                          (dispatch(buyListDeSort()),
                          setSorted(!sorted)):
                          sorted == false?
                            (setSorted(!sorted),
                          dispatch(buyListSort())):null)
      }} className={cn('sort-btn')}>정렬</button>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>상품명</th>
          <th>개수</th>
          <th>추가</th>
          <th>삭제</th>
        </tr>
      </thead>    
          {buyList.map((data,i)=>{return(
          <tbody key={data['id']}>
            <tr>
            <td>{i}</td>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.count}</td>
            <td><button onClick={()=>{

              dispatch(
                increase(
                  buyList[i].id))}} className={cn('plusbtn')}>+</button></td>
            <td><button onClick={()=>{console.log(i);
              dispatch(deleteOrder(i))}}>
              삭제
              </button></td>
            </tr>
          </tbody>)})}      
      
    </Table>
    </div> 
  )
}



export {CartPage}