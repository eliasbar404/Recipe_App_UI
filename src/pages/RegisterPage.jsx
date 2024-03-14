import { Button } from "@/components/ui/button"
import { useRegisterUsersMutation } from "@/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name:'',
    email: '',
    password:'',
    passwordConfirmation: ''
  });
  const [registerUsers] = useRegisterUsersMutation();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await registerUsers(data);
      navigate('/login');

    } catch (err) {
        console.log(err);
        setData({
          name: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        });
    }
}

  return (
    <div className="px-16 pt-8 mx-64 mt-16 h-[500px] ">
      <div className="my-4">
        <h1 className="text-3xl">Logo</h1>
        <div className="my-4 py-2">
          <h1 className="text-3xl font-bold mb-2">Register</h1>
          <p className="text-md text-slate-400">Enter your details to create your account and enjoy our services.</p>  
        </div>
      </div>
      <form onSubmit={handleForm}>
        <div className="grid grid-cols-2 my-6">
          <div className="grid grid-cols-1 my-2 ">
            <label className="text-lg mb-2">Full name</label>
            <input type="text" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent" placeholder="name" value={data.name} name={"name"} onChange={handleInput}/>
          </div>
          <div className="grid grid-cols-1 my-2 ml-28">
            <label className="text-lg mb-2">Email</label>
            <input type="email" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent" placeholder="email" value={data.email} name="email" onChange={handleInput}/>
          </div>
          <div className="grid grid-cols-1 my-2 ">
            <label className="text-lg mb-2">Password</label>
            <input type="password" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent" placeholder="password" value={data.password} name="password"onChange={handleInput}/>
          </div>
          <div className="grid grid-cols-1 my-2 ml-28">
            <label className="text-lg mb-2">Password confirmation</label>
            <input type="password" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent" placeholder="confirmation" name="passwordConfirmation" value={data.passwordConfirmation} onChange={handleInput}/>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button>Confirm</Button>
        </div>
      </form>
      <div className="flex justify-center mt-6">
        <Link to={'/login'} className="text-sm hover:text-blue-500">I have already an account</Link>
      </div>
    </div>
  )
}

export default RegisterPage