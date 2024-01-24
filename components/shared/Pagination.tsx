'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type PaginationProps = {
    page: number | string,
    totalPages: number,
    urlParamName: string
}

const Pagination = ({urlParamName, page, totalPages}: PaginationProps) => {
  
    const router = useRouter()
    const searchParams = useSearchParams()
  
    return (
    <div>Pagination</div>
  )
}

export default Pagination