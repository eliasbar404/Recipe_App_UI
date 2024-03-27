import Breakfast from '../../assets/Breakfast.png';
import recipes from '../../assets/recipes.png';
import dinner from '../../assets/dinner.png';
import lunch from '../../assets/lunch.png';
import dessert from '../../assets/dessert.png';
import drinks from '../../assets/drinks.png';
import snacks from '../../assets/snacks.png';


const Hero = () => {

  const style = {
    backgroundImage: `url(${recipes})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositio: "center",
  };

  return(
    <section className="flex flex-col gap-4 m-4 py-2 xl:flex-row ">

      <div className="flex flex-col justify-center w-full xl:w-[65%] xl:pt-16">

        <div className="flex flex-col justify-center w-full
        h-screen xl:h-[75%] rounded-md pr-[30%]" style={style}>

          <div className=' bg-white bg-opacity-75 p-6'>
            <h1 className='py-6 text-5xl font-resipes text-blue-700'>Simple and delicious</h1>
            <button className=' font-resipes text-xl border-2 border-blue-700 px-6 p-1 rounded-2xl hover:border-4'>Latest Recipes</button>
          </div>

        </div>

        <div className='flex flex-col justify-center w-full h-40 my-6 bg-slate-100 rounded-md md:flex-row md:justify-between md:px-[15%]'>

          <div className='flex flex-col items-center my-2 md:justify-center'>
            <h1 className='text-5xl font-resipes text-blue-900'>JOIN US</h1>
            <p className='text-slate-500 text-lg'>Get the latest in your inbox!</p>
          </div>

          <div className='flex justify-center my-2 md:items-center '>
            <input className='p-2 w-64' type="email" placeholder='Email Address' />
            <button className='p-2 text-white bg-black font-resipes'>I'm IN</button>
          </div>

        </div> 

      </div>

      <div className='flex flex-col xl:w-[35%]'>

        <div>
          <h1 className='text-5xl font-resipes text-center text-blue-900 mt-6'>Meals</h1>
        </div> 
        
        <div className="grid grid-cols-2 justify-items-center gap-y-6 w-full py-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 ">

          <div className="flex-col space-y-4 size-56  bg-slate-100 rounded-lg ">
            <div className='w-full h-[75%]'>
              <img src={Breakfast} alt='image' className='size-full rounded-t-lg'/>
            </div>
            <div className='px-2 flex justify-between '>
              <h2 className='text-lg mx-2 font-resipes'>Breakfast</h2>
              <button className='text-sm  px-2 rounded-md bg-white hover:bg-blue-100 duration-500'>See More</button>
            </div>
          </div>

          <div className="flex-col space-y-4 size-56 bg-slate-100 rounded-lg   ">
            <div className='w-full h-[75%]'>
              <img src={lunch} alt='image' className='size-full rounded-t-lg'/>
            </div>
            <div className='px-2 flex justify-between '>
              <h2 className='text-lg mx-2 font-resipes '>Lunch</h2>
              <button className='text-sm  px-2 rounded-md bg-white hover:bg-blue-100 duration-500'>See More</button>
            </div>
          </div>

          <div className="flex-col space-y-4 size-56 bg-slate-100 rounded-lg   ">
            <div className='w-full h-[75%]'>
              <img src={dinner} alt='image' className='size-full rounded-t-lg'/>
            </div>
            <div className='px-2 flex justify-between '>
              <h2 className='text-lg mx-2 font-resipes '>Dinner</h2>
              <button className='text-sm  px-2 rounded-md bg-white hover:bg-blue-100 duration-500'>See More</button>
            </div>
          </div>

          <div className="flex-col space-y-4 size-56 bg-slate-100 rounded-lg   ">
            <div className='w-full h-[75%]'>
              <img src={dessert} alt='image' className='size-full rounded-t-lg'/>
            </div>
            <div className='px-2 flex justify-between '>
              <h2 className='text-lg mx-2 font-resipes '>Dessert</h2>
              <button className='text-sm  px-2 rounded-md bg-white hover:bg-blue-100 duration-500'>See More</button>
            </div>
          </div>

          <div className="flex-col space-y-4 size-56 bg-slate-100 rounded-lg   ">
            <div className='w-full h-[75%]'>
              <img src={drinks} alt='image' className='size-full rounded-t-lg'/>
            </div>
            <div className='px-2 flex justify-between '>
              <h2 className='text-lg mx-2 font-resipes '>Drinks</h2>
              <button className='text-sm  px-2 rounded-md bg-white hover:bg-blue-100 duration-500'>See More</button>
            </div>
          </div>

          <div className="flex-col space-y-4 size-56 bg-slate-100 rounded-lg   ">
            <div className='w-full h-[75%]'>
              <img src={snacks} alt='image' className='size-full rounded-t-lg'/>
            </div>
            <div className='px-2 flex justify-between '>
              <h2 className='text-lg mx-2 font-resipes '>Snackes</h2>
              <button className='text-sm  px-2 rounded-md bg-white hover:bg-blue-100 duration-500'>See More</button>
            </div>
          </div>

        </div>

      </div>
      

    </section>
  )
}

export default Hero;