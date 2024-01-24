'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'

type PaginationProps = {
    page: number | string,
    totalPages: number,
    urlParamName: string
}

const Pagination = ({urlParamName, page, totalPages}: PaginationProps) => {
  
    const router = useRouter()
    const searchParams = useSearchParams()

    const onClick = (btnType: string) => {

    }
  
    return (
    <div className='flex gap-2'>
      <Button>
        
      </Button>
    </div>
  )
}

export default Pagination