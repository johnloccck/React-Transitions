// import React, { Component,useState } from "react";

// import "./App.css";
// import Modal from "./components/Modal/Modal";
// import Backdrop from "./components/Backdrop/Backdrop";
// import List from "./components/List/List";

// class App extends Component {
//   render() {
//     const [show, setShow] = useState(false);
//     const showModal = () => {
//       setShow(true)
//     }
//     const closeModal = () => {
//       setShow(false)
//     }
//     return (
//       <div className="App">
//         <h1>React Animations</h1>
//         <Modal show={show} closed={closeModal}/>
//         <Backdrop show={show} />
//         <button onClick={showModal}  className="Button">Open Modal</button>
//         <h3>Animating Lists</h3>
//         <List />
//       </div>
//     );
//   }
// }

// export default App;
import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () =>{
  const [show, setShow] = useState(false);
      const showModal = () => {
        setShow(true)
      }
      const closeModal = () => {
        setShow(false)
      }

  return (
    <div className="App">

        <h1>React Animations</h1>
         <Modal show={show} closed={closeModal}/>
          {/* <Backdrop show={show} /> */}
         <button onClick={showModal}  className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
         <List />
     </div>

  
  )

}

export default App