import React, { BrowserRouter, Routes, Route } from "react";
import "./App.css";
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import BannerSlider from "./components/banner-slider/BannerSlider";
import Cart from "./components/cart/Cart";
import ProductCategories from "./components/productCategories/ProductCategories";

function App() {
  return (
    <div className="myApp">
    {/* <BrowserRouter> */}
            <Header />
            {/* <Routes> */}
                {/* <Route/> */}
                <BannerSlider />
                <ProductCategories />
                <Cart />
            {/* </Routes> */}
            <Footer />
    {/* </BrowserRouter> */}
    </div>
  );
}

// componentWillUnmount
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             show:true
//         }
//     }
//     render() {
//         return (
//             <div className='App'>
//                 <h1>Component Will Unmount</h1>
//                 <button onClick={()=>{this.setState({s})}}>Toggle Child Component</button>
//                 <Student />
//             </div>
//         )
//     }
// }

// shouldComponentUpdate
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             count:0
//         }
//     }
//     shouldComponentUpdate() {
//         console.log("shouldComponentUpdate", this.state.count);
//         if(this.state.count > 3 && this.state.count < 10) {
//             return true;
//         } else {
//             return false
//         }
//     }
//     render() {
//         return (
//             <div className='App'>
//                 <h1>Should Component Update</h1>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
//             </div>
//         )
//     }
// }

// componentDidUpdate
// class App extends React.Component {
//   constructor() {
//     super();
//     console.log("constructor")
//     this.state={
//       count:0
//     }

//   }
//   componentDidUpdate(preProps, preState, snapShot) {
//     console.log("componentDidUpdate", preState.count, this.state.count)
//     preState.count == this.state.count ? alert("Data is already same"): console.log("It's work perfectly")
//     this.state.count < 10 ? this.setState({count:this.state.count+1}):alert("Completed to 10");
//   }
//   render() {
//     console.log("render")
//     return (
//       <div className='App'>
//         <h1>Component Did Mount</h1>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>{this.setState({count:1})}}>Update Numbers</button>
//       </div>
//     )
//   }
// }

// componentDidMount method
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       name:"Radhey"
//     }
//   }

//   componentDidMount() {
//     console.log("componentDidMount")
//   }

//   render() {
//     console.log("Render")
//     return (
//       <div className='App'>
//       <h1>Component Did Mount {this.state.name}</h1>
//       <button onClick={()=>{this.setState({name:"Radhey Jhorar"})}}>Update Name</button>
//     </div>
//     )
//   }
// }

// Constructor LifeCycle Method
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       name:"Radhey"
//     }
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>Hello {this.state.name}</h1>
//       </div>
//     )
//   }
// }

// Pass function as props
// function App() {

//   function myName() {
//     alert("Radhey Jhorar")
//   }

//   return (
//     <div className='App'>
//       <h1>Pass function as Props</h1>
//       <User name={myName}/>
//     </div>
//   )
// }

// Conditional rendering | if Condition
// function App() {
//   return (
//     <div className='App'>
//       <h1>Conditional Rendering!</h1>
//       <Profile />
//     </div>
//   )
// }

// Basic form
// function App() {

//   const [name, setName]=React.useState("");
//   const [tnc, setTnc]=React.useState(false);
//   const [book, setBook]=React.useState("");

//   function getFormData(e) {
//     console.log(name, tnc, book)
//     e.preventDefault()
//   }

//   return (
//     <div className='App'>
//       <h1>Handle Form in React</h1>
//       <form onSubmit={getFormData}>
//         <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
//         <select onChange={(e)=>setBook(e.target.value)}>
//           <option>Select Option</option>
//           <option>Book1</option>
//           <option>Book2</option>
//           <option>Book3</option>
//           <option>Book4</option>
//         </select><br/><br/>
//         <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span><br/><br/>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// Hide and Show Element
// function App() {

//   const [status, setStatus] = React.useState(true)

//   return (
//     <div className='App'>
//       {status?<h1>Hello World!</h1>:null}

//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}

//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }

// Get Input box value
// function App() {

//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)

//   function getData(val) {
//     console.log(val.target)
//     setData(val.target.value)
//     setPrint(false)
//   }

//   return (
//     <div className='App'>
//       <h1>Get Input box value</h1>
//       <input type='text' onChange={getData}/>
//       <h2>{print?data:null}</h2>
//       <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   )
// }

// State in class component

// class App extends React.Component {

//   constructor(){
//     super();
//     this.state={
//       data:1,
//       subData: 0
//     }
//   }

//   apple() {
//     this.setState({data:this.state.data+1})
//   }
//   apple2 = () => {
//     this.setState({subData: this.state.subData+1})
//   }
//   render() {
//     return (
//       <div className="App">
//         {/* <Header /> */}
//         <h1>{this.state.data}</h1>
//         <h1>{this.state.subData}</h1>
//         <button onClick={()=>this.apple()}>Update Data</button>
//         <button onClick={()=>this.apple2()}>Update subData</button>
//       </div>
//     )
//   }
// }

// props in function components
// function App() {
//   const [name, setName]=useState("Radhey Jhorar")
//   return (
//     <div className="App">
//         {/* <Header /> */}
//         <h1>Props in React</h1>
//         <Student name={name}/>
//         <button onClick={()=>(setName("Choudhary"))}>Update</button>
//     </div>
//   )
// }

// props in class Components

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       name:"Radhey"
//     }
//   }
//   apple() {
//     this.setState({name:"Choudhary"})
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>props in Class Component</h1>
//         <button onClick={()=>this.apple()}>Update it</button>
//         <Student name={this.state.name} email="myemail@test.com" />
//       </div>
//     )
//   }
// }

export default App;
