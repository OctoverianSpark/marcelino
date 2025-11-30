import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from "framer-motion"

export default function Modal({onClose}:{onClose: ()=>void}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className='max-w-2xl w-full bg-white shadow-2xl'>
          <CardTitle className='p-6 pb-4'>
            <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4'>
              ¿Sientes que perdiste al amor de tu vida y harías lo que fuera por volver a estar juntos?
            </h2>
            <p className='text-lg md:text-xl text-gray-700'>
              Estoy aquí para guiarte en reconquistar a esa persona especial o atraer el verdadero amor a tu vida
            </p>
          </CardTitle>
          <CardContent className='p-6 pt-2'>
            <div className='w-full max-w-md mx-auto'>
              <div className='w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center relative overflow-hidden'>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className='text-8xl'
                >
                  💕
                </motion.div>
                
                {/* Floating hearts animation */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute text-3xl'
                    initial={{ 
                      bottom: -20, 
                      left: `${20 + i * 15}%`,
                      opacity: 0 
                    }}
                    animate={{ 
                      bottom: '100%', 
                      opacity: [0, 1, 0] 
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                  >
                    💗
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className='text-center text-sm md:text-base text-gray-600 italic mt-4 px-4'
              >
                Así lucirían los latidos de tu pareja ideal unidos a los tuyos
              </motion.p>
            </div>
            
            <Button 
              onClick={onClose}
              className='w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-6 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer'
            >
              <motion.span
                className='relative z-10 flex items-center justify-center gap-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ❤️
                </motion.span>
                Comenzar mi camino al amor
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.75
                  }}
                >
                  ❤️
                </motion.span>
              </motion.span>
              
              {/* Shine effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}