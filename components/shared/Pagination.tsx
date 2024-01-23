import React from 'react'

type PaginationProps = {
    page: number | string,
}

const Pagination = ({urlParamName, page, totalPages}: PaginationProps) => {
  return (
    <div>Pagination</div>
  )
}

export default Pagination