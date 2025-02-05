import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardMain,
  CardMainContent
} from '@/components/ui/card'

export type GenericDataProps = {
  imgUrl: string
  nameMusic: string
  nameArtist: string
}[]

export function Home() {
  const [data, setData] = useState<GenericDataProps>([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://picsum.photos/v2/list?page=1&limit=7'
        )
        const images = await response.json()

        const updatedData = images.map((image: { download_url: string }) => ({
          imgUrl: image.download_url,
          nameMusic: 'Sample Music Title',
          nameArtist: 'Sample Artist Name'
        }))

        setData(updatedData)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-end px-10">
        <span>Mostrar tudo</span>
      </div>
      <div className="flex items-center gap-10 overflow-x-hidden">
        {data.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <img
                src={item.imgUrl}
                alt={item.nameArtist}
                className="w-[170px] h-[170px]"
              />
            </CardHeader>
            <CardMain>
              <CardMainContent className="flex flex-col">
                <span>{item.nameMusic}</span>
                <span>{item.nameArtist}</span>
              </CardMainContent>
            </CardMain>
          </Card>
        ))}
      </div>
    </div>
  )
}
