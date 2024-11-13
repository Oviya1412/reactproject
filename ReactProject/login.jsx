// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Appp.css';

// import Button from '@mui/material/Button';
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

// // const App=()=>
// //   { return(
// //   <div>
// //     <button className="btn btn-warning p-8 m-3">CLICK</button>
// //   </div>
// // );
// };
// class Login extends React.Component{
//   constructor(props)
//   {
//       super(props);
//       this.state={

//               UserName:"Oviya",
//               Password:"1000"
//       }
//   }
//   Click = (event) => {
//     event.preventDefault(); 
    
//     const Loc1= document.getElementById('in1');
//     const Locval1 = Loc1.value;
//     const Loc2=document.getElementById('in2');
//     const Locval2=Loc2.value;
//     if(Locval1===this.state.UserName && Locval2 ===this.state.Password)
//     {
//       alert("LOGIN SUCCESSFULLY");
//       this.props.history.push('/App');
//     }
//     else{
//       alert("Invalid Username or Password");
//     }
            
// }
//   render(){
//     return(
//       < div className="sty"> 
//       <form onSubmit={this.Click}> 

//       <div className='sty1' > 
//         <br></br>
//         <center><h2>LOGIN</h2></center>
//       <br></br>
//       <br></br>

//       <center>
//         <h5>USERNAME: </h5>
//         <br></br>
//         <input type="text" id="in1" required/>
//         <br></br>
//         <br></br>
//         <h5>PASSWORD:</h5>
//         <br></br>
//         <input type="password" id="in2" required/>
//         <br></br>
//         <br></br>
//         <button className="btn btn-primary">Submit</button>
//         {/* <Button variant='contained' color='primary'>Submit</Button> */}
//         </center>
//         </div>
//       </form>
//       </div>
//     )
//   }
// }
// export default withRouter(Login);
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Appp.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@mui/material';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check credentials
    if (username === "Oviya" && password === "1000") {
      alert("LOGIN SUCCESSFUL");
      navigate('/app'); 
    } else {
      alert("Invalid Username or Password");
    }
  };
 const handlesign=()=>
 {
  navigate('/signup');
 }
  return (
    <>
       <div className="sty">
      <form onSubmit={handleSubmit}>
      
        <div className='sty1'>
          
          <br></br>
          <center><h2>LOGIN</h2></center>
         <br></br>
          <center>
            <h5 className='hhh'>USERNAME:</h5>
            <br></br>
            <input 
              type="text"
              id="in1"
              className='form-control'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px'}}
            />
            <br /><br />
            <h5 className='hhh'>PASSWORD:</h5>
            <br />
            <input  className="form-control"
              type="password"
              id="in2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px'}}
            />
            <br /><br />
            <button className="btn btn-primary">Submit</button>
            <br></br>
            <br></br>
            <h5>Create an Account ?</h5>
            <Button variant='outlined' color='primary' onClick={handlesign}>register here!!</Button>
          </center>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
