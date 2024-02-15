import './App.css'
import ImageSlider from './components/ImageSlider'

import car1 from '/images/car-1.jpg'
import car2 from '/images/car-2.jpg'
import car3 from '/images/car-3.jpg'
import car4 from '/images/car-4.jpg'
import car5 from '/images/car-5.jpg'

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

function App() {
  return <div style={{
    maxWidth : "1200px",
    width : "100%",
    aspectRatio : "10/6",
    margin : "0 auto"
  }}>
    <ImageSlider images={IMAGES} />
  </div>
}

export default App
