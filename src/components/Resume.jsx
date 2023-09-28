import React from 'react'

const Resume = () => {
    return (
        <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Resume</h1>

            <div className='grid sm:grid-cols-2 grid-cols-1'>
                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-[#001b5e] mb-4'>Education</h2>
                    <div className='mb-4'>
                        <a href="https://gusto.edu.mm/">
                            <h3 className='text-xl font-semibold'>GUSTO University</h3>
                        </a>
                        <p className='text-gray-600'>HND Diploma</p>
                        <p className='text-gray-600'>Graduated: Nov 2020</p>
                    </div>

                    <div className='mb-4'>
                        <a href="https://kmd.com.sg/">
                            <h3 className='text-xl font-semibold'>KMD Institute</h3>
                        </a>
                        <p className='text-gray-600'>B.SC Hons Computer Science</p>
                        <p className='text-gray-600'>Graduated: Nov 2021</p>
                    </div>

                    <div className='mb-4'>
                        <a href="http://fairway.com.mm/">
                            <h3 className='text-xl font-semibold'>Fairway Technology</h3>
                        </a>
                        <p className='text-gray-600'>Professional Web Developer</p>
                        <p className='text-gray-600'>Graduated: May 2022</p>
                    </div>
                </section>

                <section className='mb-8 justify-self-end'>
                    <h2 className='text-2xl font-semibold text-[#001b5e] mb-4'>Work Experience</h2>
                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold'>Internship</h3>
                        <p className='text-gray-600'>Softcomm Technology</p>
                        <p className='text-gray-600'>April 2023 - May 2023</p>
                        <ul className='list-disc pl-6'>
                            <li className='mb-2'>Achievement or responsibility bullet point 1.</li>
                            <li className='mb-2'>Achievement or responsibility bullet point 2.</li>
                        </ul>
                    </div>
                </section>

                <section className='mb-8'>
                    <h2 className='text-2xl font-semibold text-[#001b5e] mb-4'>Skills</h2>
                    <ul className='list-disc pl-6'>
                        <li className='mb-2'>HTML/CSS</li>
                        <li className='mb-2'>JavaScript</li>
                        <li className='mb-2'>React.js</li>
                        <li className='mb-2'>PHP</li>
                        <li className='mb-2'>Laravel</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Resume
