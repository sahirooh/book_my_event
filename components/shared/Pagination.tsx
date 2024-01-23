import React from 'react'

type PaginationProps = {
    page: number | string,
    totalPages: number,
    urlParamName: string
}

const Pagination = ({urlParamName, page, totalPages}: PaginationProps) => {
  return (
    <div>Pagination</div>
  )
}

export default Pagination