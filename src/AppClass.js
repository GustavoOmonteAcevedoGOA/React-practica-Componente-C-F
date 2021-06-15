import React, {Component} from 'react';
import './App.css'
import BlogCard from './BlogCard';
import {isArrayEmpty} from './Utils';

class AppClass extends Component {
  firstName = 'John';
  lastName ='Wick';
  age = 28;
  job = 'Getleman';
  inputPlaceholder = 'Enter Your Details';
  mArray=[1,2,3,4];
  mObj= {
    name:'Toto',
    age:30
  };
  getfullName = (firstName,lastName)=>`${this.firstName} ${this.lastName}`;

  detailsInputBox=<input placeholder={this.inputPlaceholder}></input>;

    state={
        showBlogs : true,
        blogArr:[
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
            likeCount :0
            },
            {
            id:3,
            title:'Blog Title 3',
            description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
            likeCount : 0
            }
        ]
    }
   
  
   
    onLikeBtnClick = (pos)=>{
        const updatedBlogList = this.state.blogArr;
        const updatedBlogObj = updatedBlogList[pos];
        updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
        updatedBlogList[pos] = updatedBlogObj;

        this.setState({blogArr:updatedBlogList});



/* console.log(updatedBlogObj); */


    }
  
  onHidenBtnClick=()=>{
      this.setState((prevState, prevProps)=>{
          return {showBlogs : !prevState.showBlogs}
        });
  console.log(this.state.showBlogs);
}

    
  render(){
      console.log(`Render Called`);
      console.log(this.state);

      const blogCards = isArrayEmpty(this.state.blogArr)? []: this.state.blogArr.map((item,pos) => {
  
  
        return(
              <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={()=>this.onLikeBtnClick(pos)}/>
              // <div className="BlogCard" key={pos}>
              //  <h3>{item.title}</h3>
              //  <p>{item.description}</p>
              // <p>hola</p>
              // </div>
          )
      });

    return(
      <div className="App">
        <div>
          <h3>Full Name: {this.getfullName(this.firstName,this.lastName)}</h3>
          <h3>Full Name: {this.firstName + ' ' + this.lastName}</h3>
          <h3>Full Name: {`${this.mObj.name} ${this.lastName}`}</h3>
          <p>Age: {this.mObj.age}</p>
          <p>Job: {this.job}</p>
          {this.detailsInputBox}
          {this.mArray[0]}
        </div>      
        <div>
            <button onClick={this.onHidenBtnClick} >{this.state.showBlogs?'Hide List':'Show List'}</button>
            <br></br>
            {
                this.state.showBlogs ? blogCards:null
            }
        </div>    
      </div>
    ); 
  }

 
}

export default AppClass;
