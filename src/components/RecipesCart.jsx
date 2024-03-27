import { useState, useEffect } from 'react';
import axios from 'axios';

const RecipesCart = () => {
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data } = await axios.get('https://recipeapi-production-3fc4.up.railway.app/api/recipes');
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const rendersRecipes = recipes.map((recipe) => {
    const img = recipe.images.find((image)=> {
      return image.id = 1;
    });
    
    return (
      <div key={recipe.id} className='flex flex-col rounded-lg'>

        <div key={recipe.id} className='size-60 '>
          <img key={img.id} src={img.image_url} alt="image" className='size-full rounded-t-lg' />
        </div>

        <h1 key={recipe.id} className='w-60 text-center text-xl text-blue-900 mt-4 py-3 bg-slate-100 rounded-b-lg'>{recipe.recipe.title}</h1>

      </div>
    )
  })

  return (
    <section className='felx flex-col m-2'>

      <h1 className='text-5xl font-resipes text-center text-blue-900'>Recipes</h1>

      <h1 className='text-end mr-4'>See All {'>'}</h1>

      <div className='grid grid-cols-2 justify-items-center gap-4 w-full py-6 md:grid-cols-3 lg:grid-cols-4 '>
        {rendersRecipes}
      </div>

    </section>
  )
}

export default RecipesCart