import React, {Component,useState} from 'react';
import logo from './logo.svg';
import './App.css'
import BlogCard from './BlogCard';
import {isArrayEmpty} from './Utils';

function App() {
  const firstName = 'John';
  const lastName ='Wick';
  const age = 28;
  const job = 'Getleman';
  const inputPlaceholder = 'Enter Your Details';
  const mArray=[1,2,3,4];
  const mObj= {
    name:'Toto',
    age:30
  };
      const getfullName = (firstName,lastName)=>`${firstName} ${lastName}`;

  const detailsInputBox=<input placeholder={inputPlaceholder}></input>;

  const [showBlogs, setShowBLogs]= useState([true]);
  const [lista,setLista]= useState([true]);

  const [blogArr, setBlogArr]= useState([
    {
    id:1,
    title:'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    likeCount : 0
    },
    {
    id:2,
    title:'Blog Title 2',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    likeCount : 0
    },
    {
    id:3,
    title:'Blog Title 3',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    likeCount : 0
    }
]);



const onLikeBtnClick =(pos)=>{
  const updatedBlogList = blogArr;
  const updatedBlogObj = updatedBlogList[pos];
  updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
  updatedBlogList[pos]=updatedBlogObj
  /* this.setState((prevState,prevProp)=>{
    return {likeCount : prevState.likeCount + 1}
        this.setState({blogArr:updatedBlogList});
    
    */
  setBlogArr(updatedBlogList);
  /* setTimeout(() => { */ //si hay muchos datos
    setLista(!lista);
 /*  }, 300); */
  

  
}

const blogCards = isArrayEmpty(blogArr)? []: blogArr.map((item,pos) => {
  console.log(item);
  
  return(
        <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={()=>onLikeBtnClick(pos)} />
       
    )
});
const onHidenBtnClick=()=>{
  setShowBLogs(!showBlogs);
  console.log(`cambio`);  
}

  return (
    <div className="App">
      <div>
        <h3>Full Name: {getfullName(firstName,lastName)}</h3>
        <h3>Full Name: {firstName + ' ' + lastName}</h3>
        <h3>Full Name: {`${mObj.name} ${lastName}`}</h3>
        <p>Age: {mObj.age}</p>
        <p>Job: {job}</p>
        {detailsInputBox}
        {mArray[0]}
      </div>      
      <div>
          <button onClick={onHidenBtnClick} >{showBlogs?'Hide List':'Show List'}</button>
          <br></br>
          {
            showBlogs ? blogCards:null
          }
      </div>    
    </div>

  );
}

export default App;
