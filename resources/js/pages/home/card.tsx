import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import React from 'react'

const Coffee = [
    {
        image:'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name:'Pa Chupachups',
        description:'Enjoy Me. 💚',
    },
     {
        image:'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name:'Pa Chupachups',
        description:'Enjoy Me. 💚',
    },
    {
        image:'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name:'Pa Chupachups',
        description:'Enjoy Me. 💚',
    },
    {
        image:'https://about.starbucks.com/uploads/2025/05/Starbucks-Iced-Horchata-1536x1067.jpg',
        name:'Pa Chupachups',
        description:'Enjoy Me. 💚',
    }
]


const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-full max-w-7xl mx-auto">
      {Coffee.map((i, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={i.image} 
            alt={i.name} 
            className="w-full h-96 object-cover"
          />
          <div className="py-12 px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {i.name}
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              {i.description}
            </p>
            <Link href={'/menu'}>
            <Button className="px-10 py-3 border-2 hover:cursor-pointer border-gray-900 
                                rounded-full font-semibold transition-all duration-300">
              See More
            </Button>
            </Link>
          </div>
          
        </div>
        
      ))}
        
    </div>
    
  )
}

export default Card