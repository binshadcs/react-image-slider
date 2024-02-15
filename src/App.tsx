import './App.css'
import ImageSlider from './components/ImageSlider'
import VideoSlider from './components/VideoSlider'

import car1 from '/images/car-1.jpg'
import car2 from '/images/car-2.jpg'
import car3 from '/images/car-3.jpg'
import car4 from '/images/car-4.jpg'
import car5 from '/images/car-5.jpg'

import video1 from "/videos/part-1.webm"
import video2 from "/videos/part-2.webm"
import video3 from "/videos/part-3.webm"
import video4 from "/videos/part-4.webm"

const IMAGES = [
  {
    url : car1,
    alt : "Imge 1"
  },
  {
    url : car2,
    alt : "Image 2"
  },
  {
    url : car3,
    alt : "Image 3"
  },
  {
    url : car4,
    alt : "Image 4"
  },
  {
    url : car5,
    alt : "Image 5"
  }
]


const VIDEO = [
  {
    url : video1,
    alt : "Video 1"
  },
  {
    url : video2,
    alt : "Video 2"
  },
  {
    url : video3,
    alt : "Video 3"
  },
  {
    url : video4,
    alt : "Video 4"
  }
]

function App() {
  return <div style={{
    minHeight: "600px",
    width : "100%",
    aspectRatio : "10/4",
    margin : "0 auto"
  }}>
    {/* <ImageSlider images={IMAGES} /> */}
    <VideoSlider images={VIDEO} />
  </div>
}

export default App
