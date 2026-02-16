import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const OurWork = () => {

   const workData = [
   {
        title: 'Mobile app marketing',
        description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
        image: assets.work_mobile_app
    }, 
     {
        title: 'ASMU dashboard',
        description: 'We help you execute your plan and deliver results.',
        image: assets.asmu_dashboard
    },
     {
        title: 'ASPS dashboard',
        description: 'We help you create a Thingspeak dashboard that drives results.',
        image: assets.asps_dashboard
    }
   ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <Title title='Our latest work' desc='from startegy to 
        execution, we craft digital solutions that move your business forward.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>

            {
                workData.map((work, index)=>(
                    <motion.div
                     initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: index * 0.2}}
        viewport={{once: true}}
                    
                    key={index} className='Hover:scale-102 duration-500
                    transition-all cursor-pointer'>
                        <img src={work.image} className='w-full rounded-xl' alt="" />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </motion.div>
                ))
            }

        </div>
      
    </motion.div>
  )
}

export default OurWork
