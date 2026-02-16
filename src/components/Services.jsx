import React from 'react'
import assets from '../assets/assets.js'
import Title from './Title.jsx'
import ServiceCard from './ServiceCard.jsx'
import { motion } from 'motion/react'


const Services = () => {

    const servicesData = [
        {
            title: 'Idea & Problem Guidance',
            description: 'We help teams choose real-world problems and shape strong hackathon-ready solutions.',
            icon: assets.ads_icon
        },
        {
            title: 'Technical Mentorship',
            description: 'Get step-by-step help with coding, tools, APIs, and project structure.',
            icon: assets.marketing_icon,
        },
        {
             title: 'Project Planning & Execution',
            description: 'We guide task division, timelines, and feature building so nothing feels overwhelming.',
            icon: assets.content_icon,
        },
        {
              title: 'Presentation & Submission Help',
            description: 'Learn how to prepare demos, pitch decks, and clear explanations for your project.',
            icon: assets.social_icon,
        }
    ]



  return (
    <motion.div
     initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.2}}
        viewport={{once: true}}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 mask-linear-from-violet-700
        -z-1 dark:hidden'/>

      <Title title='How we support hackathon beginners?' desc='From idea to submission — we guide teams through every stage of their hackathon journey.'/>    

       <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index}/>
        ))}
       </div>
      
    </motion.div>
  )
}

export default Services
