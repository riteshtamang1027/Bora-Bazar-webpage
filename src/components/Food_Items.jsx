import React from 'react';
import first from '../../public/foods_images/1.jpg'
import second from '../../public/foods_images/2.jpg'
import third from '../../public/foods_images/3.jpg'
import forth from '../../public/foods_images/4.jpg'
import fifth from '../../public/foods_images/5.jpg'
import sixth from '../../public/foods_images/6.jpg'
import seventh from '../../public/foods_images/7.jpg'



export default function Food_Items() {
  return (
    <div className='mt-16'>
        <div className='w-11/12 mx-auto '>
        <div className='grid items-center  text-center space-y-4'>
        <h1 className='text-2xl font-semibold opacity-80'>
            What food you love to order
            </h1>
            <p className='opacity-70'>Here order your favorite foods from different categories</p>
        </div>
        <div className='grid grid-cols-7'>
        {
            Items.map((item,index)=>(
                <div className='flex flex-col items-center mt-16 space-y-2'>
                <div className=' rounded-full w-max bg-slate-100'>
                     <img width={150} src={item.Image} alt="" />
                 </div>
                     <p className=' opacity-90 font-medium text-[16px]'>{item.Name}</p>
                </div>
            ))
        }
        </div>
        
         
       
        </div>
    </div>
  )
}


const Items=[
    {
        Image:first,
        Name:"Fresh vegetables",
    }, {
        Image:second,
        Name:"Diet Foods",
    },
    {
        Image:third,
        Name:"Diet Nutrition",
    },
    {
        Image:forth,
        Name:"Fast Food Items",
    },
    {
        Image:fifth,
        Name:"Fruits Items",
    },
    {
        Image:sixth,
        Name:"Healthy Foods",
    },
    {
        Image:seventh,
        Name:"Grocery Items",
    },
]