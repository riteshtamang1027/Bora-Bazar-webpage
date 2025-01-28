import React from 'react';
import first from '../../public/foods_images/1.jpg'
import second from '../../public/foods_images/2.jpg'
import third from '../../public/foods_images/3.jpg'
import forth from '../../public/foods_images/4.jpg'
import fifth from '../../public/foods_images/5.jpg'
import sixth from '../../public/foods_images/6.jpg'
import seventh from '../../public/foods_images/7.jpg'
import eight from '../../public/foods_images/8.jpg'
import nine from '../../public/foods_images/9.webp'
import ten from '../../public/foods_images/10.webp'
import eleven from '../../public/foods_images/11.webp'
import twelve from '../../public/foods_images/12.webp'
import thirteen from '../../public/foods_images/13.webp'
import fourteen from '../../public/foods_images/14.webp'
import fifteen from '../../public/foods_images/15.webp'
import sixteen from '../../public/foods_images/16.webp'





export default function Food_Items() {
  return (
    <div className='mt-24'>
        <div className='w-11/12 mx-auto '>
        <div className='grid items-center  text-center space-y-4'>
        <p className='text-2xl font-semibold opacity-90'>
            What food you love to order
            </p>
            <p className='opacity-70'>Here order your favorite foods from different categories</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 '>
        {
            Items.map((item,index)=>(
                <div key={index} className='flex flex-col items-center mt-16 space-y-2'>
                <div className=' rounded-full w-max bg-slate-100 '>
                     <img className='' width={150} src={item.Image} alt="image" />
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
      {
        Image:eight,
        Name:"Quality Milk",
    },  {
        Image:nine,
        Name:"Cold Drinks",
    },  {
        Image:ten,
        Name:"Beaf Steak",
    },  {
        Image:eleven,
        Name:"vitamin Items",
    },  {
        Image:twelve,
        Name:"Raw Chicken",
    },  {
        Image:thirteen,
        Name:"Breakfast Item",
    },  {
        Image:fourteen,
        Name:"Fish Items",
    },  {
        Image:fifteen,
        Name:"Green Vegetables",
    }, {
        Image:sixteen,
        Name:"Cookies & Biscuits",
    },
]