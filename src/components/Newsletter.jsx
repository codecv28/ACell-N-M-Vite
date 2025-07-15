import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaDownload, FaExpand, FaShareAlt } from 'react-icons/fa'
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "/Comic_book_English.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FLIPBOOK_WIDTH = 420;
const FLIPBOOK_HEIGHT = 550;

const Pages = React.forwardRef(({ children, number }, ref) => {
    return (
        <div
            className="demoPage bg-white"
            ref={ref}
            style={{
                width: `${FLIPBOOK_WIDTH}px`,
                height: `${FLIPBOOK_HEIGHT}px`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                padding: 0,
            }}
        >
            {children}
            <p className="text-sm mt-1">Page {number}</p>
        </div>
    );
});

Pages.displayName = "Pages";
const Newsletter = () => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const flipBookRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        console.log(numPages)
    };

    const onFlip = (e) => {
        setCurrentPage(e.data);
    };

    // Determine if we're showing cover (single page) or spread (two pages)
    const isShowingCover = currentPage === 0;
    const isShowingCoverBack = currentPage === numPages - 1;
    const transformStyle = isShowingCover || isShowingCoverBack ? 'translate-x-0' : '-translate-x-52';
    return (
        <>
            <nav className='bg-[#4B9994] p-3 text-white font-bold text-center fixed w-full z-50 top-0'>
                This is navbar
            </nav>
            <main className='mx-10 mt-20 text-[#0F2A5A]'>
                <div className="textSection">
                    <h1 className='text-3xl font-bold font-inter'>Stay Connected with Our NEWSLETTER</h1>
                    <p className='mt-2'>Our newsletter is more than just updates—it's a celebration of the Alumni Cell community. From achievements and events to memories and milestones, each issue keeps you connected with what matters most.</p>
                </div>
                <div className="contentSection bg-[#B9CDC0] rounded-2xl p-5 px-10 mt-7">
                    <div className='part1 flex justify-between'>
                        <h1 className='font-bold text-3xl italic'>Edition 2024-25</h1>
                        <div className='flex justify-between gap-5 list-none mt-3'>
                            <FaExpand className='w-5 h-5 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' />
                            <FaDownload className='w-5 h-5 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' />
                            <FaShareAlt className='w-5 h-5 cursor-pointer transition-all transform hover:scale-120 duration-300 ease-in-out' />
                        </div>
                    </div>
                    <div className="flipbook flex justify-between mt-5">
                        <FaArrowCircleLeft className='hover:shadow-[0_0_10px_4px_rgba(120,120,120,0.5)] rounded-full w-10 h-10 cursor-pointer transition-all transform hover:scale-110 duration-300 ease-in-out' onClick={() => flipBookRef.current?.pageFlip().flipPrev()} />
                        <HTMLFlipBook
                            ref={flipBookRef}
                            showCover={true}
                            width={FLIPBOOK_WIDTH}
                            height={FLIPBOOK_HEIGHT}
                            size="stretch"
                            minWidth={FLIPBOOK_WIDTH}
                            maxWidth={FLIPBOOK_WIDTH}
                            minHeight={FLIPBOOK_HEIGHT}
                            maxHeight={FLIPBOOK_HEIGHT}
                            drawShadow={true}
                            useMouseEvents={true}
                            onFlip={onFlip}
                            className={` rounded bg-transparent transition-transform duration-300 mx-auto`}
                        >
                            {Array.from(new Array(numPages), (_, i) => (
                                <Pages key={i} number={i + 1}>
                                    <Document
                                        file={pdfFile}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                        loading={<div className="text-white">Loading...</div>}
                                    >
                                        <Page
                                            pageNumber={i + 1}
                                            width={FLIPBOOK_WIDTH}
                                            renderTextLayer={false}
                                            renderAnnotationLayer={false}
                                        />
                                    </Document>
                                </Pages>
                            ))}
                        </HTMLFlipBook>
                        <FaArrowCircleRight className='hover:shadow-[0_0_10px_4px_rgba(120,120,120,0.5)] rounded-full w-10 h-10 cursor-pointer transition-all transform hover:scale-110 duration-300 ease-in-out' onClick={() => flipBookRef.current?.pageFlip().flipNext()} />
                    </div>
                    <p className='underline w-fit mt-5 mx-auto cursor-pointer transition-all transform hover:scale-105 duration-300 ease-in-out'>View All Editions</p>

                </div>
            </main>
            <footer className='bg-[#4B9994] p-3 text-white font-bold text-center w-full fixed bottom-0'>
                This is footer for reference
            </footer>
        </>
    )
}

export default Newsletter
