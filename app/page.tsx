'use client'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import Image from 'next/image'
import { AuroraText } from '@/components/ui/aurora-text'
import { Meteors } from '@/components/ui/meteors'
import Modal from '@/components/Modal'

export default function Home () {
  const [api, setApi] = useState<CarouselApi>()
  const [open, setOpen] = useState(true)

  const references = [
    {
      points: 5,
      name: 'Danny',
      comments: 'Increíble, un servicio impecable',
      img: '/users/user-1.jpg'
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

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.canScrollNext() ? api.scrollNext() : api.scrollTo(0)
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <main className="relative w-full px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
      {/* Modal */}
      {open && <Modal onClose={() => setOpen(false)} />}

      {/* Background effects */}
      <Meteors className="fixed inset-0 -z-10 hidden sm:block" number={40} />
      <Meteors className="fixed inset-0 -z-10 sm:hidden" number={20} />

      {/* Hero */}
      <section className="flex flex-col items-center max-w-3xl mx-auto mb-16">
        <Image
          src="/profile.jpg"
          alt="Marcelino - Pastor y Guía Espiritual"
          width={200}
          height={200}
          priority
          className="rounded-full w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mb-6"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          Hola, soy{' '}
          <AuroraText
            colors={['#CC0066', '#6120A2', '#005AC2', '#2D97C6']}
            className="block sm:inline text-4xl sm:text-5xl"
          >
            Marcelino
          </AuroraText>
        </h1>

        <p className="
          text-center
          text-base sm:text-lg
          bg-gradient-to-br from-purple-50 to-blue-50
          rounded-2xl
          p-4 sm:p-6
          shadow-md
        ">
          Soy Marcelino, pastor dedicado a guiar almas a través de la sabiduría
          de la astrología y el tarot. Mi misión es ayudarte a descubrir tu
          propósito, comprender tus energías y encontrar claridad en tu camino
          espiritual. Juntos exploraremos los misterios del universo para que
          puedas vivir con mayor paz, confianza y armonía.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 max-w-5xl mx-auto">
          <div className="hidden sm:block flex-1 h-1 bg-gradient-to-r from-transparent via-purple-400 to-purple-600" />
          
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            <AuroraText colors={['#CC0066', '#6120A2', '#005AC2', '#2D97C6']}>
              Personas que recibieron mi asesoría
            </AuroraText>
          </h2>

          <div className="hidden sm:block flex-1 h-1 bg-gradient-to-l from-transparent via-purple-400 to-purple-600" />
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {references.map((ref, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="
                    h-full min-h-[18rem]
                    bg-gradient-to-br from-purple-100 to-blue-100
                    rounded-2xl
                    p-5 sm:p-6
                    flex flex-col items-center justify-center
                    shadow-lg
                    mx-1 sm:mx-2
                  ">
                    <Image
                      src={ref.img}
                      width={80}
                      height={80}
                      alt={`Foto de ${ref.name}`}
                      className="rounded-full mb-4 border-4 border-white shadow-md"
                    />

                    <span className="text-xl sm:text-2xl font-semibold mb-2">
                      {ref.name}
                    </span>

                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: ref.points }).map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg sm:text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-base sm:text-lg text-center text-gray-700 italic">
                      "{ref.comments}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  )
}
