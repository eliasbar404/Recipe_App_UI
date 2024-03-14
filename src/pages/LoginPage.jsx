import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLoginUsersMutation } from "@/store";


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
      const accessToken = res.access_token;
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
    <div className="px-16 pt-8 mx-[500px] mt-16 h-[500px]">
      <div className="flex justify-center my-6 ">
        <h1 className="text-3xl font-bold mb-2">Log in</h1>  
      </div>

      <form onSubmit={handleForm}>
        <div className="grid grid-cols-1 content-center my-4">
          <div className="grid grid-cols-1 gap-2 justify-items-center">
            <label className="text-lg">Email</label>
            <input type="email" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent" placeholder="email" name="email" value={data.email} onChange={handleInput}/>
          </div>

          <div className="grid grid-cols-1 gap-2 my-8 justify-items-center">
            <label className="text-lg">Password</label>
            <input type="password" className="w-64 rounded-l-lg p-2 shadow-xl bg-transparent" placeholder="password" name="password" value={data.password} onChange={handleInput}/>
          </div>
        </div>

        <div className="flex justify-center">
          <Button>Log in</Button>
        </div>
      </form>
      
      <div className="flex justify-center mt-6">
        <Link to={'/register'} className="text-sm hover:text-blue-500">create account</Link>
      </div>
    </div>
  )
}

export default LoginPage