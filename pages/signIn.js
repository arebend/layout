import { loginErrorMessage, resetPassword, userLogin } from "../configs/firebase/firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import withUnprotected from "../configs/hoc/withUnprotected";
import React from "react";
import Image from "next/image";

function Home() {
  const [emailUser, setEmailUser] = useState('');
  const [emailUserModal, setEmailUserModal] = useState('');
  const [password, setPassword] = useState('');
  const [isLoad, setIsload] = useState(false)
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [isMessage, setIsMessage] = useState('')
  const [isMessageModal, setIsMessageModal] = useState('')

  const loginHandle = async (e) => {
    e.preventDefault();
    setIsload(false)
    console.log(isLoad)
    try {
      console.log(emailUser, password)
      await userLogin(emailUser, password)
      router.push("/layout")
    } catch (error) {
      setIsload(false)
      const message = loginErrorMessage(error.code)
      setIsMessage(message);
      console.log(message);
    }
  }

  const resetHandle = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailUserModal)
      setIsMessageModal('Email Sent')
      // setShowModal(false)
    } catch (error) {
      const messageModal = loginErrorMessage(error.code)
      setIsMessageModal(messageModal);
      console.log(messageModal);
    }
  }

  return (
    <div className="lg:flex xl:flex 2xl:flex md:pt-0 lg:pt-28 xl:pt-36 2xl:pt-56 bg-[#F5F5FF] h-screen mx-auto">
      {/* left content */}
      <div className="container p-6 lg:pl-20 xl:pl-48 2xl:px-10 mx-auto">
        <div className="flex items-center place-content-center sm:-mb-40 ">
          <Image className="flex" src="/icon/radaba.svg" width={45} height={57} alt="logo" />
          <p className="sm:text-5xl text-6xl font-semibold text-center bg-[#4C4DDC] bg-clip-text text-transparent pl-4">
            Radaba
          </p>
        </div>
        <div className="sm:invisible text-3xl pt-2 text-center text-[#404040] decoration-indigo-300">
          <p>
            Radaba helps you manage your
          </p>
          <p>
            radio network optimization activity.
          </p>
        </div>
      </div>

      {/* right content */}
      <div className="container p-2 mx-auto md:px-52 lg:px-10 xl:px-48 2xl:px-10">
        <div className="text-center">
          <p className="text-3xl text-[#0A0A0A] pr-44 px-2">
            Welcome
          </p>
          <p className="text-base text-[#9E9E9E] pr-8 pt-2 px-2">
            Login in below to enter your account
          </p>
        </div>
        <form
          onSubmit={loginHandle}
          className="text-center">
          <label>
            <span className="block text-md font-medium text-[#757575] pr-64 pt-4 px-2">
              Email
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="peer border-solid border-2 border-gray-400 rounded-md px-1 disabled:opacity-75 h-8 w-72"
              placeholder="Enter email address"
              onChange={e => setEmailUser(e.target.value)}
            />
            <p className="invisible peer-invalid:visible text-pink-600 text-sm pr-11">
              *Please provide a valid email address.
            </p>
          </label>
          <label>
            <span className="block text-md font-medium text-[#757575] pr-56 px-2">
              Password
            </span>
            <input
              type="password"
              name="password"
              id="text"
              className="peer border-solid border-2 border-gray-400 rounded-md px-1 h-8 w-72"
              placeholder="Enter password"
              minLength="8"
              onChange={e => setPassword(e.target.value)}
            />
            <p className="invisible peer-invalid:visible text-pink-600 text-sm pr-20">
              *Must have atleast 8 characters.
            </p>
          </label>
          <div className="pt-4">
            <button
              disabled={isLoad}
              className="h-8 w-72 text-base text-white bg-[#4C4DDC] hover:bg-indigo-700 rounded-md"
              type="submit">Login
            </button>
            <p className="text-[#9E9E9E] p-1">
              Forget password?
              <a
                href="#"
                className="hover:underline decoration-indigo-600 px-1 text-indigo-800"
                onClick={() => setShowModal(true)}
              >
                Reset password
              </a>
              {showModal ? (
                <>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black "></div>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-sm text-black">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        <div className="flex items-start justify-between px-7 pt-7 rounded-t bg-white">
                          <h3 className="text-3xl font-semibold bg-white text-left pl-1">
                            Reset your password
                          </h3>
                        </div>
                        <div className="relative px-7 pb-7 flex-auto bg-white">
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed bg-white text-left pl-1">
                            Confirm your email and we will send you instructions to reset your password.
                          </p>
                          <input
                            type="email"
                            className="peer h-8 w-80 border-solid border-2 border-gray-400 rounded-md p-2 bg-white"
                            placeholder="Enter email address"
                            id="name"
                            onChange={e => setEmailUserModal(e.target.value)} />
                          <div>
                            {isMessageModal &&
                              <p className=" bg-[#FFF4F2] text-[#CB3A31] border-[#EEB4B0] text-lef border-2 rounded-lg m-1 mt-3 px-2 w-80 text-ß">
                                {isMessageModal}
                              </p>
                            }
                          </div>

                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b bg-[#F5F5F5]">
                          <button
                            className="bg-white text-black active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-[#4C4DDC] text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 
                              rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            // onClick={resetHandle}
                            onClick={() => {
                              setShowModal(false)
                              setShowModal2(true)
                            }}
                          >
                            Reset password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {showModal2 ? (
                <>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black "></div>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-sm text-black">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        <div className="flex items-start justify-between px-7 pt-7 rounded-t bg-white">
                          <h3 className="text-3xl font-semibold bg-white text-left pl-1">
                            Check your email
                          </h3>
                        </div>
                        <div className="relative px-7 pb-7 flex-auto bg-white">
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed bg-white text-left pl-1">
                            We have emailed you the instructions for resetting your password
                          </p>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b bg-[#F5F5F5]">
                          <button
                            className="bg-white text-black active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setShowModal2(false)
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </p>
          </div>
        </form>
        <div className="w-72 text-left container mx-auto">
          {isMessage && <p className=" bg-[#FFF4F2] text-[#CB3A31] border-[#EEB4B0] border-2 rounded-lg p-2">
            {isMessage}
          </p>}
        </div>
      </div>
    </div>
  )
}

export default withUnprotected(Home)