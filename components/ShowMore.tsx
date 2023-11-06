'use client'

import { ShowMoreProps } from '@/interface'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router= useRouter()
    const handleNavigation=()=>{
        const newLimit = (pageNumber+1)*10
        const newPathName = updateSearchParams('limit', String(newLimit))
        router.push(newPathName)
    }
  return (
    <div className='w-full flex items-center justify-center gap-5 mt-10'>
        {!isNext&&(
            <CustomButton
            title='Show More' 
            buttonType='button'
            customStyle='bg-primary-blue w-full m-2 md:w-[200px] rounded-full text-white'
            handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore