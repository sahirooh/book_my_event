import { getOrdersByEvent } from '@/lib/actions/order.actions'
import { SearchParamProps } from '@/types'
import React from 'react'

const OrdersPage = async ({searchParams}: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || ''
  const searchText = (searchParams?.query as string) || ''

  const orders = await getOrdersByEvent({eventId, searchString: searchText})
  
  return (
    <div>OrdersPage</div>
  )
}

export default OrdersPage