'use client'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { Meteors } from '@/components/ui/meteors'
import { AuroraText } from '@/components/ui/aurora-text'
import Modal from '@/components/Modal'

export default function Home () {
  const [api, setApi] = React.useState<CarouselApi>()

  const references = [
    {
      points: 5,
      name: 'Annarys',
      comments: 'Increible, un servicio impecable',
      img: '/users/user-1.jpg' // Cambiado: sin ./ ni assets
    },
    {
      points: 5,
      name: 'María',
      comments: 'Excelente servicio, muy profesional!',
      img: '/users/user-1.jpg'
    },
    {
      points: 5,
      name: 'Carlos',
      comments: 'Cambió mi vida completamente, gracias!',
      img: '/users/user-1.jpg'
    },
    {
      points: 5,
      name: 'Laura',
      comments: 'Altamente recomendado, muy preciso!',
      img: '/users/user-1.jpg'
    },
    {
      points: 5,
      name: 'Pedro',
      comments: 'Una experiencia transformadora!',
      img: '/users/user-1.jpg'
    }
  ]

  const [open,setOpen] = useState(true)
  
  useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 3000)

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <main className='w-full px-4 py-8 position-relative'>
      {open && ( 
        <Modal onClose={()=>setOpen(false)}/>
      )}


      <div className='flex flex-col items-center max-w-3xl mx-auto mb-12'>
        <div className="position-fixed inset-0 h-full">

        </div>
        <div className='flex justify-center mb-6'>
          <Image
            src='/profile.jpg'
            alt='Marcelino - Pastor y Guía Espiritual'
            width={200}
            height={200}
            className='rounded-full'
          />
        </div>
        <h1 className='text-4xl font-bold text-center mb-6'>
          Hola, soy <AuroraText colors={["#CC0066", "#6120A2", "#005AC2", "#2D97C6"]} className='text-5xl'>Marcelino</AuroraText>
        </h1>
        <p className='text-center text-lg bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-md'>
          Soy Marcelino, pastor dedicado a guiar almas a través de la sabiduría
          de la astrología y el tarot. Mi misión es ayudarte a descubrir tu
          propósito, comprender tus energías y encontrar claridad en tu camino
          espiritual. Juntos exploraremos los misterios del universo para que
          puedas vivir con mayor paz, confianza y armonía.
        </p>
      </div>
          <Meteors  className='fixed' number={40} maxDuration={20}/>

      <div className='mb-12'>
        <div className='flex items-center gap-4 mb-8 max-w-4xl mx-auto'>
          <div className='flex-1 h-1 bg-gradient-to-r from-transparent via-purple-400 to-purple-600'></div>
          <h2 className='text-4xl font-bold text-center'>
            <AuroraText colors={["#CC0066", "#6120A2", "#005AC2", "#2D97C6"]}>
              Personas que recibieron mi asesoría
            </AuroraText>
          </h2>
          <div className='flex-1 h-1 bg-gradient-to-l from-transparent via-purple-400 to-purple-600'></div>
        </div>
        <div className='w-full max-w-6xl mx-auto'>
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {references.map((ref, idx) => (
                <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={idx}>
                  <div className='h-80 w-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 flex items-center justify-center flex-col shadow-lg mx-2'>
                    <Image
                      src={ref.img}
                      width={80}
                      height={80}
                      alt={`Foto de ${ref.name}`}
                      className='rounded-full mb-4 border-4 border-white shadow-md'
                    />
                    <span className='text-2xl font-semibold mb-2'>
                      {ref.name}
                    </span>
                    <div className='flex gap-1 mb-3'>
                      {Array.from({ length: ref.points }).map((_, i) => (
                        <span key={i} className='text-yellow-500 text-xl'>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className='text-lg text-center text-gray-700 italic'>
                      "{ref.comments}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
      </div>


    </main>
  )
}
