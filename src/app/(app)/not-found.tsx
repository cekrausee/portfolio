import { Link } from '@/components/link'

const NotFound = () => (
  <div>
    <div>Page not found.</div>
    <Link
      href='/'
      className='font-sans'
    >
      Head back.
    </Link>
  </div>
)

export default NotFound
