import React from 'react'
import amazon from '../../public/payment/amazonpay.svg';
import american from '../../public/payment/american-express.svg';
import mastercard from '../../public/payment/mastercard.svg';
import paypal from '../../public/payment/paypal.svg';
import visa from '../../public/payment/visa.svg';


export default function Bottom_Footer() {
  return (
    <div className='w-10/12 mx-auto my-4'>
 <div className="flex justify-between items-center  max-md:flex-col sm:ml-8 md:ml-0 gap-4">
          <p className=" font-semibold opacity-75 text-sm  max-sm:text-lg ">Powered By: <span className='text-sm font-semibold text-emerald-400   max-sm:text-lg'>Ritesh Tamang</span></p>
       <div className="flex max-sm:gap-8 gap-4 ">
       <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={amazon} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={american} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={mastercard} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={paypal} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={visa} alt="img" />
       </div>
        </div>
    </div>
   
  )
}
