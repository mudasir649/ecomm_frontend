import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-8 p-5'>
      <div className='md:flex md:flex-row md:justify-between text-center text-sm sm:text-base'>
      <div className='flex flex-row justify-center space-x-2'>
        <div className='bg-gradient-to-r from-red-700 to-red-400 w-10 h-10 rounded-lg'></div>
        <h1 className='text-3xl text-gray-600'>Logo</h1>
      </div>
      <div className='mt-2'>
        <a href='#' className='text-gray-600 hover:text-gray-800 p-4'>Home</a>
        <a href='#' className='text-gray-600 hover:text-gray-800 p-4'>Shop</a>
        <a href='#' className='text-gray-600 hover:text-gray-800 p-4'>Blog</a>
        <a href='#' className='text-gray-600 hover:text-gray-800 p-4'>Contact</a>
        <a href='#' className='bg-red-600 text-gray-50 hover:text-gray-800 p-3 px-5 rounded-full space-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart inline-block"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Cart (0)
        </a>
      </div>
      </div> {/* Main Navigation */}
      <div className='flex flex-row mt-20'>
        <div className='w-2/5 flex flex-col justify-center'>
          <h2 className='font-serif text-5xl text-gray-600 mb-4 text-center'>Lorem ipsum dolor sit</h2>
          <p className='uppercase text-gray-600 tracking-wide text-center'>Lorem ipsum dolor sit amet consectetur</p>
          <p className='uppercase text-gray-600 tracking-wide text-center'>Lorem ipsum dolor sit adipiscing elit</p>
          <a href='#' className='bg-gradient-to-r from-red-700 to-red-400 rounded-full py-4 px-8 text-gray-50 uppercase text-xl self-start'>Shop Now</a>
        </div>
        <div className='w-3/5'>
          <Image 
          alt='main-img'
          src="https://digiday.com/wp-content/uploads/sites/3/2021/11/ecommerce-changes-2.gif?w=1030&h=579&crop=1"
          width={1000}
          height={1000}
          />
        </div>
      </div>
    </div>
  )
}
