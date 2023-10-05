import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "./Share/Navber";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const LoginPage = () => {

const { userLogin}=useContext(AuthContext)
const location= useLocation();
const navigate = useNavigate();
console.log(location)


  const handleLogin = e =>{
     e.preventDefault()

     const email= e.target.email.value;
     const password = e.target.password.value;
     console.log(email,password)

    // console.log(e.currentTarget);
    // const form = new FormData(e.currentTarget)
    // console.log(form.get('password'));

 
    userLogin(email,password)
    .then(result=>{
      console.log(result.user)

      // navigate after
      navigate(location?.state ? location.state :'/')



    })
    .catch(error=>{
      console.error(error)
    })

  }



    return (
        <div>
         
          <Navber></Navber>

        <div className="">

        <h2 className=" text-center my-6 text-2xl font-bold"> Your log in account</h2>

<form  onSubmit={handleLogin} className="  md:w-3/4  lg:w-1/2 mx-auto" >
<div className="form-control">
<label className="label">
  <span className="label-text">Email</span>
</label>
<input type="email" placeholder="email" name='email' className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
  <span className="label-text">Password</span>
</label>
<input type="password" placeholder="password" name='password' className="input input-bordered" required />
<label className="label">
  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Login</button>
</div>
</form>
<div className=" text-center text-2xl p-3" >
<span className="p-1">Don’t Have An Account ?</span>
<Link className="text-blue-600" to='/register' >Register</Link> 

</div>

        </div>

        </div>


    );
};

export default LoginPage;










{/* <label className="label">

</label> */}