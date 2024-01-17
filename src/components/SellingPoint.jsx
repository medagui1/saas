import React from 'react'

const SellingPoint = ({image, title, description, data_aos}) => {
  return (
    <div className='flex justify-center items-center flex-col max-w-[400px] gap-4 max-sm:gap-2' data-aos={data_aos}>
        <img src={image} alt={title} height={151} width={130}/>
        <h6 className='font-bold'> {title} </h6>
        <p className=''> {description} </p>        
    </div>
  )
}

export default SellingPoint