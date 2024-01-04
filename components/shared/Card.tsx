import { IEvent } from '@/lib/database/models/event.model'

type CardProps = {
    event: IEvent,
    hasOrderLink?: boolean,
    hidePrice?: boolean
}

const Card = ({event, hasOrderLink, hidePrice}: CardProps) => {
  return (
    <div className='group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[440px]'>
        
    </div>
  )
}

export default Card