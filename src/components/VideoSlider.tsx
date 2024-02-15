import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react'
import './VideoSlider.css'

type ImageSliderProps = {
    images : {
        url : string
        alt : string
    }[]
}

export default function VideoSlider({images} : ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    useEffect(()=> {
        const interval = setInterval(showNextImage, 3000)
        return () => {
            clearInterval(interval)
        } 
    },[imageIndex])

    function showNextImage() {
        setImageIndex(index => {
            if(index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if(index === 0) return images.length - 1
            return index - 1
        })
    }

    return <section style={{ width : "100%", height : "100%", position: "relative", display: "flex"}}>
        <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
            {
                images.map(({url, alt}, index) => (
                    // <img 
                    //     key={url} 
                    //     src={url} 
                    //     alt={alt} 
                    //     aria-hidden={imageIndex !== index}
                    //     className="img-slider-img" 
                    //     style={{ translate: `${-100 * imageIndex}%` }} />
                    <video autoPlay loop muted className="img-slider-img" style={{ translate: `${-100 * imageIndex}%` }}>
                        <source src={url} key={url} />
                    </video>
                ))
            }
        </div>

        <div className="absolute top-[20%] left-[20%] max-w-[700px] text-white lg:top-[30%] lg:max-w-[900px]">
            <h1 className="text-6xl font-bold">Ensuring Excellence in Every Detail,<br />
                Our Inspections Define <span className="text-blue-500">Trust and Reliability</span></h1>
            {/* <p>
            we go beyond the surface, meticulously examining every aspect to provide you with unparalleled confidence in your investments. Our commitment to precision and transparency sets us apart, making us your trusted partner in quality inspections.
            </p> */}
        </div>

        <button onClick={showPrevImage} className="img-slider-btn" style={{left : "0"}} aria-label="View Prev Image">
            <ArrowBigLeft />
        </button>
        <button onClick={showNextImage} className="img-slider-btn" style={{right : "0"}} aria-label="View Next Image">
            <ArrowBigRight />
        </button>
      
       
      
        <div style={{
            position : "absolute",
            bottom : ".5rem",
            left: "50%",
            translate : "-50%",
            display : "flex",
            gap : ".25rem"
        }}>
            {
                images.map((_, index) => (
                    <button key={index} className="img-slider-dot-btn" onClick={()=> setImageIndex(index)} aria-label={`View Image ${index + 1 }`}>
                        { index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden /> }
                    </button>
                ))
            }
        </div>
    </section>
  }

