import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newsletter from './components/Newsletter'
import Magazine from './components/Magazine'
import MGallery from './components/MGallery'
import Flipbook from './components/Flipbook'
import { view_Gallery_Context, view_individual_Flipbook_Context, pdf_Context} from './context/context'

function App() {
  const [view_Gallery, setView_Gallery] = useState(false)
  const [view_individual_Flipbook, setView_individual_Flipbook] = useState(false)
  const [pdf, setPdf] = useState(null)


  const handleFullscreen = () => {
          const flipbookNode = flipBookRef.current?.flipBook?.current;
  
          if (flipbookNode && flipbookNode.requestFullscreen) {
              flipbookNode.requestFullscreen();
          } else if (flipbookNode && flipbookNode.webkitRequestFullscreen) {
              flipbookNode.webkitRequestFullscreen();
          } else if (flipbookNode && flipbookNode.msRequestFullscreen) {
              flipbookNode.msRequestFullscreen();
          }
      };
  
      const handleShare = () => {
          if (navigator.share) {
              navigator.share(
                  {
                      title: "Alumni Magazine",
                      url: pdf,
                  }
              )
                  .then(() => console.log('Shared successfully'))
                  .catch((error) => console.error('Sharing failed:', error));
          } else {
              alert('Web Share is not supported on this browser.');
          }
      }

  return (
    <>
      {/* <Newsletter/> */}
      {/* <Magazine/> */}
      <pdf_Context.Provider value={{ pdf,setPdf }}>

      <view_Gallery_Context.Provider value={{ view_Gallery, setView_Gallery }}>
        <view_individual_Flipbook_Context.Provider value={{ view_individual_Flipbook, setView_individual_Flipbook }}>

          {view_Gallery ? (view_individual_Flipbook ? <Flipbook /> : <MGallery />) : <Magazine />}

        </view_individual_Flipbook_Context.Provider>
      </view_Gallery_Context.Provider >

      </pdf_Context.Provider>
    </>
  )
}

export default App
