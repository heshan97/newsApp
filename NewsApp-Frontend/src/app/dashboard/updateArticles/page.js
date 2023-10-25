'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function UpdateArticle() {
const router = useRouter();
// const { push } = useRouter();
//   const { id } = router.query; // Get the article ID from the route query parameters
  const { id } = router.query ?? {}; 
  const [state, setState] = useState({
    title: '',
    description: '',
    content: '',
    author: '',
    image: ''
  });

  // Load the article data when the component mounts
  useEffect(() => {
    if (id) {
      // Fetch the article data based on the ID
      axios.get(`http://localhost:5000/api/news/${id}`)
        .then(response => {
          const article = response.data;
          setState(article);
        })
        .catch(error => {
          console.error('Error fetching article data:', error);
        });
    }
  }, [id]);

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    try {
      const token = Cookies.get('loginToken');
      axios({
        method: 'put', // Use 'put' for updating data
        url: `http://localhost:5000/api/news/${id}`, // Use the article ID in the URL
        data: state,
        headers: {
          'Authorization': 'Bearer ' + token,
          // Other headers can be added here if needed
        }
      })
        .then(response => {
          console.log(response);
          // Redirect to the updated article or another page
          router.push('/dashboard/dashboardScreen');
        })
        .catch(error => {
          console.error('Error updating article:', error);
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div className="flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Update Article
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
          {/* You can prepopulate the input fields with the data from the "state" object */}
        </form>
      </div>
    </div>
  );
}
