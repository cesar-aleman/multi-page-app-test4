import React from "react";

class Contact extends React.Component {

   state = { showing: true };

   render() {
       const { showing } = this.state;
       return (
           <div>
               <input type="text" placeholder="yes" onClick={() => this.setState({ showing: !showing })}></input>
               { showing 
                   ? <div>This is visible</div>
                   : null
               }
           </div>  
       )
   }
}


// const Contact = () => {
//   return (

//     <div>
//       <h1>Contact US</h1>
//       <p>Contact US page body content</p>
//       <button onClick="Foo()"> Hello </button>
//     </div>
//   );
// };

export default Contact;
