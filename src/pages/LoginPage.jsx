import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLoginUsersMutation } from "@/store";

import Logo from "@/components/demo/Logo";


const LoginPage = () => {

  const [data, setData] = useState({
    email: '',
    password:''
  });

  const [loginUsers] = useLoginUsersMutation();

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
      const res = await loginUsers(data);
      console.log(res);
      const accessToken = res.data.access_token;
      localStorage.setItem('accessToken', accessToken);

    } catch (err) {
      console.log(err);
        setData({
          email: '',
          password: ''
        });
    }
  };

  return (
    <div className="absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] pb-4">
      <div className="my-2">
        <Link to={'/'} className="flex justify-center"><Logo width={100}/></Link>
        <div className="flex justify-center py-2">
          <h1 className="text-3xl mb-2 font-mono font-black">Log in</h1>  
        </div>
      </div>

      <form onSubmit={handleForm}>
        <div className="grid grid-cols-1 content-center my-4">
          <div className="grid grid-cols-1 gap-2">
            <label className="font-black font-mono">Email:</label>
            <input type="email" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2" name="email" value={data.email} onChange={handleInput}/>
          </div>

          <div className="grid grid-cols-1 gap-2 my-8">
            <label className="font-black font-mono">Password:</label>
            <input type="password" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent border-2" name="password" value={data.password} onChange={handleInput}/>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="px-10">Log in</Button>
        </div>
      </form>

      <div className="flex justify-center mt-6">
        <Link to={'/register'} className="text-sm hover:text-blue-500 underline font-mono">create account</Link>
      </div>
      
      <div className="flex justify-center mt-1">
        <Link to={'/register'} className="text-sm hover:text-blue-500 underline font-mono">Do you forgot your password?</Link>
      </div>
    </div>
  )
}

export default LoginPage