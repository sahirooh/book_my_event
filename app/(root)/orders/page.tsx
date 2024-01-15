import { SearchParamProps } from '@/types'
import React from 'react'

const OrdersPage = async ({searchParams}: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || ''
  const searchText = (searchParams?.query as string) || ''

  
  
  return (
    <div>OrdersPage</div>
  )
}

export default OrdersPage