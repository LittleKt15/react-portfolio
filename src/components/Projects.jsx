import React from 'react'
import ProjectItem from './ProjectItem'
import gymImg from '../assets/gym&fitness.png'
import laravelEcommerce from '../assets/laravel-ecommerce.png'
import laravelStudent from '../assets/laravel-student.png'
import phpBlog from '../assets/php-blog.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, ratione fugit animi similique iure sunt quas accusantium nobis ad assumenda reprehenderit eos delectus esse dolor repudiandae quam atque incidunt dolore!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={gymImg} title='Gym & Fitness' language='CSS' />
                <ProjectItem img={laravelEcommerce} title='Laravel Ecommerce' language='Laravel' />
                <ProjectItem img={laravelStudent} title='Laravel Student' language='Laravel' />
                <ProjectItem img={phpBlog} title='PHP Blog' language='PHP' />
            </div>
        </div>
    )
}

export default Projects
