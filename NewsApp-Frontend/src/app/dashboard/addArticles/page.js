'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function AddArticle(){
     // const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    image: ''
  })
  //const router = useRouter();
  const { push } = useRouter();

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    // console.log(state);

    try {
      const token= Cookies.get('loginToken');
      axios({
     
        method: 'post',
        url:'http://localhost:5000/api/news',
        data: state,headers: {
          'Authorization': 'Bearer ' +token,
          // Other headers can be added here if needed
        }
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


    return(   
      <div className=" flex-col justify-center px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add new Article
        </h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmitHandle} className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
             Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={state.title}
                onChange={handleChange}
                autoComplete="title"
                required
                className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
             Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                type="text"
                value={state.description}
                onChange={handleChange}
                autoComplete="description"
               
                required
                className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
             Content
            </label>
            <div className="mt-2">
              <textarea
                id="content"
                name="content"
                type="text"
                value={state.content}
                onChange={handleChange}
                autoComplete="content"
                required
                className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
             Author
            </label>
            <div className="mt-2">
              <textarea
                id="author"
                name="author"
                type="text"
                value={state.author}
                onChange={handleChange}
                autoComplete="author"
                required
                className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900 ">
                Image
              </label>

            </div>
            <div className="mt-2">
              <input
                id="image"
                name="image"
                type="text"
                value={state.image}
                onChange={handleChange}
                autoComplete="image"
                required
                className=""
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Article
            </button>
          </div>
        </form>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
           Register
          </a>
        </p> */}
      </div>
    </div>
  
//         <div className=" flex-col flex items-center justify-center px-6 py-4 lg:px-8">
//             <h1>bsghvdgwd</h1>
//             <form className="w-full max-w-lg">
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//         First Name
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
//       <p className="text-red-500 text-xs italic">Please fill out this field.</p>
//     </div>
//     <div className="w-full md:w-1/2 px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//         Last Name
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//         Password
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
//       <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-2">
//     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//         City
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
//     </div>
//     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
//         State
//       </label>
//       <div className="relative">
//         <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>New Mexico</option>
//           <option>Missouri</option>
//           <option>Texas</option>
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//     </div>
//     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
//         Zip
//       </label>
//       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
//     </div>
//   </div>
// </form>
//         </div>



    )
}