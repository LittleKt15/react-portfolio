import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2020,
        title: 'Ecommerce',
        duration: '1 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis dolores distinctio odio possimus, rem autem veritatis est rerum. Expedita, nihil culpa nisi consequatur earum dignissimos eos recusandae impedit repellat!',
    },
    {
        year: 2021,
        title: 'Hotel',
        duration: '1 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis dolores distinctio odio possimus, rem autem veritatis est rerum. Expedita, nihil culpa nisi consequatur earum dignissimos eos recusandae impedit repellat!',
    },
    {
        year: 2022,
        title: 'POS',
        duration: '1 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis dolores distinctio odio possimus, rem autem veritatis est rerum. Expedita, nihil culpa nisi consequatur earum dignissimos eos recusandae impedit repellat!',
    },
    {
        year: 2023,
        title: 'Service Job',
        duration: '1 Years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis dolores distinctio odio possimus, rem autem veritatis est rerum. Expedita, nihil culpa nisi consequatur earum dignissimos eos recusandae impedit repellat!',
    },
]
const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work