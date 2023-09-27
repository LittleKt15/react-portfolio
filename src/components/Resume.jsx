import React from 'react'

const Resume = () => {
    return (
        <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Resume</h1>

            {/* Education Section */}
            <section className='mb-8'>
                <h2 className='text-2xl font-semibold text-[#001b5e] mb-4'>Education</h2>
                <div className='mb-4'>
                    <h3 className='text-xl font-semibold'>Your University</h3>
                    <p className='text-gray-600'>Bachelor of Science in Computer Science</p>
                    <p className='text-gray-600'>Graduated: May 20XX</p>
                </div>
                {/* Add more education entries if necessary */}
            </section>

            {/* Work Experience Section */}
            <section className='mb-8'>
                <h2 className='text-2xl font-semibold text-[#001b5e] mb-4'>Work Experience</h2>
                <div className='mb-4'>
                    <h3 className='text-xl font-semibold'>Software Developer</h3>
                    <p className='text-gray-600'>Company ABC, City, State</p>
                    <p className='text-gray-600'>June 20XX - Present</p>
                    <ul className='list-disc pl-6'>
                        <li className='mb-2'>Achievement or responsibility bullet point 1.</li>
                        <li className='mb-2'>Achievement or responsibility bullet point 2.</li>
                        {/* Add more bullet points as needed */}
                    </ul>
                </div>
                {/* Add more work experience entries if necessary */}
            </section>

            {/* Skills Section */}
            <section className='mb-8'>
                <h2 className='text-2xl font-semibold text-[#001b5e] mb-4'>Skills</h2>
                <ul className='list-disc pl-6'>
                    <li className='mb-2'>JavaScript</li>
                    <li className='mb-2'>React.js</li>
                    <li className='mb-2'>HTML/CSS</li>
                    <li className='mb-2'>Node.js</li>
                    {/* Add more skills as needed */}
                </ul>
            </section>
        </div>
    )
}

export default Resume
