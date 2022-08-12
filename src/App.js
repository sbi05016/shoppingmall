import logo from './logo.svg';
import {Navbar, Container, Nav} from 'react-bootstrap';
import styles from './csszip/App.module.css';
import classNames from 'classnames/bind';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import data from './data/data.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {useState,lazy,Suspense,} from 'react';
import {HomePage,AboutPage} from './context/Home.js'

const DetailPage = lazy( ()=> import('./context/Detail.js'))
const CartPage = lazy( ()=>import('./context/Cart.js').then(module => ({ default: module.CartPage })))

function App() {
  

  const cn = classNames.bind(styles)

  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data)
  let result = useQuery(['username'],()=>axios.get('https://codingapple1.github.io/userdata.json')
  .then((a)=>{return a.data}))
  return (
    <div className='App'>
      <div id={styles.top}>
      <Navbar className="top-navbar"bg="dark" variant="dark">
        <Container className={cn('top-navbar-container')}>
          <Navbar.Brand className='top-navbar-brand' href="/">Home</Navbar.Brand>
          <Nav className='menu-bar'>        
            <Nav.Link onClick={()=>{navigate('/cart')}} >Cart</Nav.Link>
            <Nav.Link href="/about"  className='menu'>about</Nav.Link>
            <Nav>
            <div className={cn('username')}>
            { result.isLoading && '로딩중' }
            { result.error && '에러남' }
            { result.data && result.data.name }
            </div>          
            </Nav>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <Routes>       
        <Route path='/' element={<HomePage shoes={shoes} setShoes={setShoes} />}/>
        <Route path="/detail/:id" element={
        <Suspense fallback={<div>로딩중임</div>}>
          <DetailPage shoes={shoes}/>
        </Suspense>
      }/>   
        <Route path='/about' element={<AboutPage/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>깔깔</div>}/>
        </Route>
        
         <Route path='/cart' element={<Suspense fallback={<div>로딩중임</div>}>
          <CartPage/>
          </Suspense>}/>
        
        <Route path='/*' element={<div>없는 페이지</div>}/>
      </Routes> 
    
    </div>
  );
}

export default App;



