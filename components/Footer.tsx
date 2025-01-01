import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
            Sind Sie auf der Suche nach <span className='text-purple'>engagierten</span> Praktikanten oder Werkstudenten?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center '>Ich suche eine Möglichkeit, mein Wissen und meine Fähigkeiten in einem Praktikum oder als Werkstudent einzubringen. Schreiben Sie mir gerne, wenn Sie eine passende Position anbieten!
            </p>
            <a href='mailto:dlam.nguyen03@gmail.com'>
                <MagicButton 
                    title="Kontatieren Sie mich"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Duc Lam Nguyen</p>

        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <div key={profile.id}  className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <img src={profile.img} alt={profile.id}
                    width={20} height={20}
                    />
                </div>
            ))}
        </div>    
        </div>
    </footer>
  )
}

export default Footer