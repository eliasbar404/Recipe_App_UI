import { Button } from "@/components/ui/button"
import { useRegisterUsersMutation } from "@/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/demo/Logo";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName:'',
    lastName: '',
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
          firstName:'',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        });
    }
}

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pb-4">
      <div className="flex flex-col items-center gap-1">
        <Link to={'/'} className="flex justify-center"><Logo width={100}/></Link>
        <div className="flex flex-col items-center gap-1 my-2">
          <h1 className="text-3xl mb-2 font-mono font-black">Sig up</h1>
          <p className="md:text-sm text-xs text-slate-400 ">Enter your details to create your account and enjoy our services.</p>  
        </div>
      </div>
      <form onSubmit={handleForm}>
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col">
            <label className="font-black font-mono">First Name:</label>
            <input type="text" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2"  value={data.firstName} name={"firstName"} onChange={handleInput}/>
          </div>
          <div className="flex flex-col">
            <label className="font-black font-mono">Last Name:</label>
            <input type="text" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2"  value={data.lastName} name={"lastName"} onChange={handleInput}/>
          </div>
          <div className="flex flex-col">
            <label className="font-black font-mono">Email:</label>
            <input type="email" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2"  value={data.email} name="email" onChange={handleInput}/>
          </div>
          <div className="flex flex-col">
            <label className="font-black font-mono">Password:</label>
            <input type="password" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2"  value={data.password} name="password"onChange={handleInput}/>
          </div>
          <div className="flex flex-col">
            <label className="font-black font-mono">Password confirmation:</label>
            <input type="password" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2"  name="passwordConfirmation" value={data.passwordConfirmation} onChange={handleInput}/>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button className="px-10">Create</Button>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <Link to={'/login'} className="text-sm hover:text-blue-500 underline font-mono">I have already an account</Link>
      </div>
    </div>
  )
}

export default RegisterPage