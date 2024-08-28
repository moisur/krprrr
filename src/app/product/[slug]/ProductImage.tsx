import { useState, useRef } from 'react'
import Image from 'next/image'

interface ProductImageProps {
  images: string[]
}

export default function ProductImage({ images }: ProductImageProps) {
  const [mainImage, setMainImage] = useState(images[0])
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isZoomed, setIsZoomed] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      setZoomPosition({ x, y })
    }
  }

  return (
    <div className="w-full md:w-1/2">
      <div 
        ref={imageRef}
        className="relative overflow-hidden rounded-lg cursor-zoom-in"
        style={{ paddingBottom: '100%' }}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={mainImage}
          alt="Product image"
          layout="fill"
          objectFit="cover"
        />
        {isZoomed && (
          <div 
            className="absolute w-1/5 h-1/5 border-2 border-white pointer-events-none"
            style={{
              left: `${zoomPosition.x * 80}%`,
              top: `${zoomPosition.y * 80}%`,
              backgroundImage: `url(${mainImage})`,
              backgroundPosition: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
              backgroundSize: '500% 500%'
            }}
          />
        )}
      </div>
      <div className="flex mt-4 gap-2">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Product view ${index + 1}`}
            width={100}
            height={100}
            className="rounded-lg object-cover cursor-pointer"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  )
}