"use client";

import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const categories = [
    {
        title: 'Hindi',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Regional Languages',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Environment, Science and Technology Reporting',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Uncovering India Invisible',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Business and Economic Journalism',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Reporting on Politics and Government',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Sports Journalism',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Investigative Reporting',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Feature Writing',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Foreign Correspondent Covering India',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Books (Non-Fiction)',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    },
    {
        title: 'Prakash Kardaley Memorial Award for Civic Journalism',
        details: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris'
    }
];

function Page() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className=" container mx-auto p-4  md:max-w-screen-lg">
            <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Award Categories</h1>
            <div className="flex flex-wrap -mx-2 ">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative bg-white border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 m-2 flex-1 min-w-[calc(100%-1rem)] sm:min-w-[calc(50%-1rem)] min-h-[100px]  "
                    >
                        <div className="relative p-4 bg-red-600 text-white flex justify-between items-center cursor-pointer  ">
                            <h2 className="text-lg font-semibold"></h2>

                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-96 p-0' : 'max-h-10 p-0'}`}
                        >

                            <div className="flex flex-col p-2 pl-5 border border-gray-300 rounded-lg bg-white shadow-sm">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="text-lg font-semibold text-red-600">{category.title}</div>
                                    <AiOutlineDown className="text-black" />
                                </div>

                                <div className="mt-2">
                                    <div className='pb-5'>{category.details}</div>
                                    <div className="border-t border-red-600 mt-2"></div>
                                    <div className='font-bold pt-5'>The prize money for each category is ₹1,00,000/-
                                        The prize money for each category is ₹1,00,000/-</div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
