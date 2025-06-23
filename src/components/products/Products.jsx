import React from 'react'
import img1 from '../../assets/women/women.png'
import img2 from '../../assets/women/women2.jpg'
import img3 from '../../assets/women/women3.jpg'
import img4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa6'

const productData=[
    {
        id:1,
        img:img1,
        title:'women ethnic',
        rating:4.5,
        color:'white',
        aosDelay:'0',
    },
    {
        id:2,
        img:img2,
        title:'Googles',
        rating:5.0,
        color:'red',
        aosDelay:'200',
    },
    {
        id:3,
        img:img3,
        title:'women Trends',
        rating:4.7,
        color:'yellow',
        aosDelay:'400',
    },
    {
        id:4,
        img:img4,
        title:'Summer Collection',
        rating:4.5,
        color:'brown',
        aosDelay:'600',
    },
    {
        id:5,
        img:img2,
        title:'Western',
        rating:4.0,
        color:'black',
        aosDelay:'800',
    },
]

function Products() {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary '>
                    Top Selling Products For You
                </p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>
                        Products
                    </h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa in cum sed.
                    </p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
                 lg:grid-cols-5 place-items-center gap-5'>
                    {productData.map((data)=>(
                        <div 
                        data-aos='fade-up'
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className='space-y-3'>
                            <img 
                            src={data.img} 
                            alt="Cover img"
                            className='h-[220px] w-[150px] object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold'>
                                    {data.title}
                                </h3>
                                <p className='text-sm text-gray-600'>{data.colors}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary 
                    text-white py-1 px-5 rounded-md '>
                        view all products
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products