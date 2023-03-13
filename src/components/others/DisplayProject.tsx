'use client'

import { useState } from 'react'
import { Image } from 'antd'

interface DisplayProjectProps {
  images: string[];
}

export default function DisplayProject (props: DisplayProjectProps) {
  const { images } = props
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Image
        preview={{
          visible: false
        }}
        width={300}
        src={images[0]}
        onClick={() => setVisible(true)}
        alt="project"
      />
      <div
        style={{
          display: 'none'
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis: any) => setVisible(vis)
          }}
        >
          {images.map((image, index) => (
            <Image key={index} src={image} alt="project" />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  )
}
