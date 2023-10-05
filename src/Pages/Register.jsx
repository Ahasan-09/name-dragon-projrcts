import { Link } from "react-router-dom";
import Navber from "./Share/Navber";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

     const {createUser} = useContext(AuthContext)
     console.log(createUser)


    const handleRegister = e =>{
        e.preventDefault()
   
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
   
    //    console.log(e.currentTarget);
    //    const form = new FormData(e.currentTarget)
    //    const email =form.get('email')
    //    const password =form.get('password')
    //    const name =form.get('name')
      
    //    console.log( name,email ,password);


        createUser(email,password)
        .then(result=>{
            console.log(result)
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
      
   
       
   
     }

    return (
        <div>
         
        <Navber></Navber>

      <div className="">

      <h2 className=" text-center my-6 text-2xl font-bold"> Your Register in account</h2>

<form  onSubmit={handleRegister} className="  md:w-3/4  lg:w-1/2 mx-auto" >
<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="name" placeholder="name" name='name' className="input input-bordered" required />
</div>
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
<button className="btn btn-primary">Register</button>
</div>
</form>
<div className=" text-center text-2xl p-3" >
<span className="p-1">Allready Have An Account ?</span>
<Link className="text-blue-600" to='/login' >Login</Link> 

</div>

      </div>

      </div>


    );
};

export default Register;