import Search from '@/components/shared/Search'
import { getOrdersByEvent } from '@/lib/actions/order.actions'
import { SearchParamProps } from '@/types'
import React from 'react'

const OrdersPage = async ({searchParams}: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || ''
  const searchText = (searchParams?.query as string) || ''

  const orders = await getOrdersByEvent({eventId, searchString: searchText})
  
  return (
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
      <h3 className='wrapper h3-bold text-center sm:text-left'>Orders</h3>
    </section>

    <section className='wrapper mt-8'>
      <Search placeholder='Search buyer name' />
    </section>
    </>
  )
}

export default OrdersPage