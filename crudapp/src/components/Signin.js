import "../styles/Signin.css";
import React, { useState } from "react";
import { CiMail, CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [value, setvalue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    var name = e.target.name ? e.target.name : e.name;
    switch (name) {
      case "email":
        setvalue((preValue) => ({
          ...preValue,
          email: e.target.value,
        }));
        break;
      case "password":
        setvalue((preValue) => ({
          ...preValue,
          password: e.target.value,
        }));
        break;
    }
    console.log(value);
  };

  const handlerout = () => {
    navigate("/");
  };

  return (
    <div className="App h-screen bg-slate-900  w-full	">
      {/* heading section */}
      <div className=" h-32 w-full	 ">
        <span className="text-slate-100 text-3xl"> &larr;</span>
      </div>

      {/* main form section */}

      <div className="bg-white	 rounded-tl-3xl h-4/5	">
        <div className="flex w-full  items-center	  flex-col">
          <div className="my-4">
            <div className="text-3xl font-bold"> Sign In</div>
            <div className="mt-2"> To be a member</div>
          </div>

          {/* content div */}
          <div className="w-2/4 w-full flex mt-5  flex-col">
            <div className=" self-center  my-6">
              <div className="my-1">
                <label className="text-xs" htmlFor="">
                  Email&minus;ID
                </label>
              </div>

              <div className="flex ">
                <span className="border-b-2 mt-1 p-2">
                  
                  <CiMail />
                </span>
                <input
                  type="text"
                  placeholder="last name"
                  name="email"
                  id="email"
                  onChange={(e) => handleChange(e)}
                  className="border-b-2 w-96	  ml-3"
                />
              </div>
            </div>

            <div className="	self-center mb-6	">
              <div className="my-1">
                <label className="text-xs" htmlFor="">
                  Enter Password
                </label>
              </div>

              <div className="flex ">
                <span className="border-b-2 mt-1 p-2">
                  <CiLock />
                </span>
                <input
                  type="text"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  onChange={(e) => handleChange(e)}
                  className="border-b-2	 w-96  ml-3"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <button className="text-xl text-slate-100 bg-slate-900 font-bold border-black  w-40 h-10  rounded-full	">
                
                submit
              </button>
            </div>
            <div className="mt-2 flex">
              
              not a member&#63;
              <p
                className="ml-2 cursor-pointer text-xl font-bold"
                onClick={handlerout}
              >
                Sign up
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
