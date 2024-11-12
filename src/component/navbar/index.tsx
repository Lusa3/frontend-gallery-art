
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

import React from 'react'
export const NavigationBar: React.FC = () => {
    return (
        <div className='mx-14 mt-5 flex gap-10 '>
            <div className=' flex gap-3'>
                <p>Accueil</p>
                <p>À propos</p>
                <p>Shop</p>
            </div>
            <div className=' flex '>
                <p>GALLERYART</p>
            </div>
            <div>
                <ShoppingCart />
            </div>
            <div>
          <Button>Button</Button>
            </div>
            
        </div>
    )
}