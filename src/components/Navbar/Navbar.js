

import ThemeToggle from '../ThemeToggle/ThemeToggle';
function Navbar() {
  return (
    <div className='bg-gray-100 dark:bg-dark '>
        <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://nexcent-page.netlify.app/assets/Icon%20(6).png" alt="logo" />
      <span class="ml-3 text-xl shadow dark:text-white">Nexcent</span>
    </a>
    <nav class="md:mr-auto md:ml-40 md:py-1 md:pl-2 dark:text-white  md:border-gray-400	flex flex-wrap items-center text-base justify-center " >
      <a class="mr-8 hover:text-gray-900">Home</a>
      <a class="mr-8 hover:text-gray-900">Service</a>
      <a class="mr-8 hover:text-gray-900">Features</a>
      <a class="mr-8 hover:text-gray-900">Product</a>
      <a class="mr-8 hover:text-gray-900">Testimonial</a>
      <a class="mr-8 hover:text-gray-900">FAQ</a>
    </nav>
    <ThemeToggle/>
    
    <button class="inline-flex items-center bg-gray-50 border-0 text-green-500 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0 md:mr-2">login
    </button>
    <button class="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded  text-base mt-4 md:mt-0 text-white ">Sign Up
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar