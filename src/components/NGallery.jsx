import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaDownload, FaExpand, FaShareAlt } from 'react-icons/fa'

const MGallery = () => {
    return (
        <>
            <nav className='bg-[#4B9994] p-3 text-white font-bold text-center fixed w-full z-50 top-0'>
                This is navbar for reference
            </nav>
            <main className='mx-1 sm:mx-10 mt-20 mb-50 text-[#0F2A5A]'>
                <div className="textSection">
                    <h1 className='text-3xl font-bold font-inter text-center'>Alumni Newsletter Collection</h1>
                    <p className='mt-2 mx-auto text-center'>Browse through all editions of our alumni newsletter — featuring updates, events, and memorable highlights from the IIT Indore alumni community</p>
                </div>
                {/* <div className="contentSection bg-[#B9CDC0] rounded-2xl mx-0 sm:mx-10  p-5 px-1 sm:px-10 mt-7 overflow-hidden">
                    <div className='part1 flex justify-between'>
                        <h1 className='font-bold text-3xl italic'>Magazine '25</h1>
                        <div className='flex justify-between gap-2 sm:gap-5 list-none mt-3'>
                            <FaExpand className='w-5 h-5 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' onClick={()=>{}}/>
                            <FaDownload className='w-5 h-5 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' />
                            <FaShareAlt className='w-5 h-5 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' />
                        </div>
                    </div>
                    <div className="flipbook flex justify-between items-center lg:gap-5 mt-5">
                        <FaArrowCircleLeft className='hover:shadow-[0_0_10px_4px_rgba(120,120,120,0.5)] rounded-full  w-10 h-10 cursor-pointer transition-all transform hover:scale-110 duration-300 ease-in-out' onClick={() => flipBookRef.current?.pageFlip().flipPrev()}/>
                        
                        
                        <FaArrowCircleRight className='hover:shadow-[0_0_10px_4px_rgba(120,120,120,0.5)] rounded-full w-10 h-10 cursor-pointer transition-all transform hover:scale-110 duration-300 ease-in-out' onClick={() => flipBookRef.current?.pageFlip().flipNext()}/>
                    </div>
                    <p className='underline w-fit mt-5 mx-auto cursor-pointer transition-all transform hover:scale-105 duration-300 ease-in-out'>View All Magazines</p>

                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5 xl:mx-25 mt-5">
                    <div className="bg-[#B9CDC0] m-2 p-5 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card w-fit">
                            <h1 className="text-center font-bold text-2xl">Title</h1>
                            <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                        </div>
                    </div>

                    <div className="bg-[#B9CDC0] m-2 p-5 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card w-fit">
                            <h1 className="text-center font-bold text-2xl">Title</h1>
                            <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                        </div>
                    </div>

                    <div className="bg-[#B9CDC0] m-2 p-5 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card w-fit">
                            <h1 className="text-center font-bold text-2xl">Title</h1>
                            <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                        </div>
                    </div>

                    <div className="bg-[#B9CDC0] m-2 p-5 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card w-fit">
                            <h1 className="text-center font-bold text-2xl">Title</h1>
                            <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default MGallery