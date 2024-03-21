import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '@/components/demo/Navbar'
import { useForm ,useFieldArray } from "react-hook-form";
import axios from 'axios';
// import token from '@/Helpers/Token';
// import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
    const navigate = useNavigate();
    const [categories,setCategories] = React.useState([]);
    
    // Get categories
    React.useEffect(() => {
        axios.get('https://recipeapi-production-3fc4.up.railway.app/api/categories').then((res)=>{setCategories(res.data)})
    }, []);



    const form = useForm({
        defaultValues:{
            title:"",
            categories:[""],
            origin:"",
            difficulty:"",
            time:"",
            description:"",
            steps:[{description:"",duration:""}],
            ingredients:[{description:"",image_url:""}],
            images:[{image_url:""}]
        }
    })

    const { register, control,handleSubmit, watch, formState: { errors } } = form;
    const onSubmit = data =>{

        console.log(data);
        axios.post('https://recipeapi-production-3fc4.up.railway.app/api/recipe',data,{headers: {'Authorization': `Bearer ${token("GET")}`,'Content-Type': 'multipart/form-data'}})
        .then(async(res)=>{
            // console.log(res.data)
            if(res.data){
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Creating the Recipe is sussecced!',
                    showConfirmButton: false,
                    timer: 2000
                })

                navigate('/user/recipes');
            }
        })

    } 


    const {
        fields: stepsFields,
        append: stepsAppend,
        remove: stepsRemove
    } = useFieldArray({ control, name: "steps" });

    const {
        fields: ingredientsFields,
        append: ingredientsAppend,
        remove: ingredientsRemove
    } = useFieldArray({ control, name: "ingredients" });

    const {
        fields: mediasFields,
        append: mediasAppend,
        remove: mediasRemove
    } = useFieldArray({ control, name: "images" });

    return (
    <main>
        <Navbar/>
        <form className='px-10 py-32 flex flex-col gap-3 bg-slate-50 mx-2 rounded-sm' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='self-center text-4xl'>Create a new Recipe</h1>
            {/* title */}
            <div className='flex flex-col mt-10'>
                <label htmlFor="" className='font-bold text-2xl'>Title:</label>
                <input className='w-[400px] p-2 border border-black rounded-sm' {...register("title", { required: true })} />
            </div>
            {/* category select */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Category:</label>
                <select className='w-[200px] p-2 border border-black rounded-sm' {...register("categories[0]", { required: true })}>
                    <option value=""></option>
                    {
                        categories.map((val,key)=>(
                            <option key={key} value={val.id}>{val.name}</option>
                        ))
                    }
                </select>
            </div>
            {/* Origin */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Origin:</label>
                <input className='w-[400px] p-2 border border-black rounded-sm' {...register("origin", { required: false })} />
            </div>
            {/* difficulty */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Difficulty:</label>
                <select className='w-[200px] p-2 border border-black rounded-sm' {...register("difficulty", { required: true })}>
                    <option value=""></option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            {/* Time */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Time:</label>
                <input className='w-[200px] p-2 border border-black rounded-sm' {...register("time", { required: true })} />

            </div>
            {/* description */}
            <div className='flex flex-col'>
                <label htmlFor="" className='font-bold text-2xl'>Description:</label>
                <textarea className='w-[400px] p-2 border border-black rounded-sm resize-none' name="" id="" cols="30" rows="5" {...register("description", { required: true })}></textarea>
            </div>
            {/* Ingredients */}
            <fieldset className='border border-black p-2'>
                <legend className='text-2xl'>Ingredients</legend>
                {
                    ingredientsFields.map((field,index)=>(
                    <div key={index} className='flex items-center gap-3 p-2'>
                            <label htmlFor="">Description:</label>
                            {/* <input type="text" name="" id="" {...register(`ingredients.${index}.description`, { required: true })}/> */}
                            <textarea name="" id="" cols="50" rows="5" className='resize-none border' {...register(`ingredients.${index}.description`, { required: true })}></textarea>
                            <label htmlFor="">Image URL:</label>
                            <input className='border' type="text" {...register(`ingredients.${index}.image_url`)}/>
                            {
                                index > 0 && <button className='bg-red-500 uppercase px-5 text-slate-100' onClick={()=>ingredientsRemove(index)}>Remove</button>
                            }
                    </div>
                    ))
                }
                <button className='bg-green-500 uppercase px-5 text-slate-100' onClick={()=>ingredientsAppend({name:"",quantity:"",type:"",media:""})}>add</button>
            </fieldset>
            {/* Steps */}
            <fieldset className='border border-black p-2'>
                <legend className='text-2xl'>Steps</legend>
                {
                    stepsFields.map((field,index)=>(
                    <div key={index} className='flex items-center gap-4 p-2'>
                            <label htmlFor="">Description:</label>
                            <input className='border' type="text" name="" id="" {...register(`steps.${index}.description`, { required: true })}/>
                            <label htmlFor="">Duration:</label>
                            <input className='border' type="number" name="" id="" {...register(`steps.${index}.duration`, { required: true })}/>

  
                            {
                                index > 0 && <button className='bg-red-500 uppercase px-5 text-slate-100' onClick={()=>stepsRemove(index)}>Remove</button>

                            }
                    </div>
                    ))
                }
                <button className='bg-green-500 uppercase px-5 text-slate-100' onClick={()=>stepsAppend({description:"",duration:"",media:"",type:""})}>add</button>
            </fieldset>

            {/* Recipes Media */}
            <fieldset className='border border-black  p-2'>
                <legend className='text-2xl'>Recipe Images</legend>
                {
                    mediasFields.map((field,index)=>(
                    <div  key={index} className='flex items-center gap-4 p-2'>

                            <label htmlFor="">Image URL:</label>
                            <input className='border' type="text" {...register(`images.${index}.image_url`, { required: true })}/>

                            {
                                index > 0 && <button className='bg-red-500 uppercase px-5 text-slate-100' onClick={()=>mediasRemove(index)}>Remove</button>

                            }
                    </div>
                    ))
                }
                <button className='bg-green-500 uppercase px-5 text-slate-100' onClick={()=>mediasAppend({media:"",type:""})}>add</button>
            </fieldset>




            <input type="submit" value="Create" className='bg-green-700 text-slate-200 text-3xl py-2 cursor-pointer mt-3 rounded-sm hover:bg-green-400 hover:text-green-900' />
            
    </form>

    </main>
    )
}

export default CreateRecipe