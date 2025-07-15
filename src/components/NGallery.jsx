import React, { useState, useRef, useContext, useEffect } from "react";
import { FaArrowLeft } from 'react-icons/fa'
import { view_Gallery_Context, view_individual_Flipbook_Context } from "../context/context";
import { pdf_Context } from "../context/context";

//importing pdf from public folder
import pdf_1 from "/Comic_book_English.pdf"
import pdf_2 from "/Comic_book_Hindi.pdf"
import pdf_3 from "/comic_book.pdf"

const MGallery = () => {

    const view_Gallery_Value = useContext(view_Gallery_Context)
    const view_individual_Flipbook_Value = useContext(view_individual_Flipbook_Context)
    const pdf_Value = useContext(pdf_Context)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const open_Book = (pdfName) => {
        pdf_Value.setPdf(pdfName)
        view_individual_Flipbook_Value.setView_individual_Flipbook(true)
    }

    return (
        <>
            <nav className='bg-[#4B9994] p-3 text-white font-bold text-center fixed w-full z-50 top-0'>
                This is navbar for reference
            </nav>
            <main className='mx-1 sm:mx-10 mt-20 mb-50 text-[#0F2A5A]'>
                <div>
                    <FaArrowLeft onClick={() => { view_Gallery_Value.setView_Gallery(false) }} className='w-7 h-7 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' />
                </div>
                <div className="textSection">
                    <h1 className='text-3xl font-bold font-inter text-center'>Alumni Newsletter Collection</h1>
                    <p className='mt-2 mx-auto text-center'>Browse through all editions of our alumni newsletter — featuring updates, events, and memorable highlights from the IIT Indore alumni community.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5 xl:mx-25 mt-5">

                    <div onClick={() => open_Book(pdf_1)} className="card bg-[#B9CDC0] m-2 p-5 w-fit rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-black">
                        <h1 className="text-center font-bold text-2xl">Title</h1>
                        <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                    </div>

                    <div onClick={() => open_Book(pdf_2)} className="card bg-[#B9CDC0] m-2 p-5 w-fit rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-black">
                        <h1 className="text-center font-bold text-2xl">Title</h1>
                        <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                    </div>

                    <div onClick={() => open_Book(pdf_3)} className="card bg-[#B9CDC0] m-2 p-5 w-fit rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-black">
                        <h1 className="text-center font-bold text-2xl">Title</h1>
                        <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                    </div>

                    <div onClick={() => open_Book(pdf_1)} className="card bg-[#B9CDC0] m-2 p-5 w-fit rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-black">
                        <h1 className="text-center font-bold text-2xl">Title</h1>
                        <p className="mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit deleniti, perspiciatis quasi ipsa impedit porro nesciunt molestias fuga laborum optio laudantium iure necessitatibus doloremque debitis vel et quibusdam? Ipsum culpa beatae eveniet vero.</p>
                    </div>

                </div>
            </main>
        </>
    )
}

export default MGallery