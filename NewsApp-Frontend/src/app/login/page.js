'use client'
import React, { useState } from 'react';
import { headers } from '../../../next.config';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken, clearToken } from '../../../redux/loginTokenSlice';
import Cookies from 'js-cookie';

import { useRouter } from 'next/navigation';

export default function Login() {
 // const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  //const router = useRouter();
  const { push } = useRouter();

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    // console.log(state);

    try {

      axios({
     
        method: 'post',
        url:'http://localhost:5000/api/admin/login',
        data: state,
      })
        .then(function (response) {
          console.log(response)
          if (response?.data?.token !== '' && response?.data?.token !== null) {
            // values._token = response?.data?.token;
            //setTempToken(response?.data?.token)
            console.log(response?.data?.token);
            Cookies.set('loginToken', response?.data?.token, { expires: 7 });
           // push('/')
            window.location.href = '/dashboard/dashboardScreen';
            // dispatch(auth.actions.login(response?.data?.token))
            // dispatch(auth.actions.setUser(response?.data))
          } else {
            // setLoading(false);
            // setSubmitting(false)
            // setStatus(response.data.message)
          }
        })
        .catch(function (error) {
          // setLoading(false)
          // setSubmitting(false)
          // setStatus('The login detail is incorrect')
        })
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleChange = event => {
    setState({...state, [event.target.name]: event.target.value });
  }

    return (
      <>
       
        <div className=" flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="/logo/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={onSubmitHandle} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={handleChange}
                    className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className=" font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={handleChange}
                    className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className=" flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               Register
              </a> */}
            </p>
          </div>
        </div>
      </>
    )
  }