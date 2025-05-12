import { Link } from '@/components/link'

const NotFound = () => (
  <div className='h-svh p-32'>
    <div>
      <div>Page not found.</div>
      <Link
        href='/'
        className='font-sans'
      >
        Head back.
      </Link>
    </div>
  </div>
)

export default NotFound
