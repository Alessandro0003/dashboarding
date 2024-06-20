import { Link } from 'react-router-dom'

import notFound from '../assets/not-found.png'

export const NotFound = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-2 bg-white from-gray-400 to-gray-400">
    <img src={notFound} className="h-[1050px] w-[1050px]" alt="Not Found" />
    <p className="text-2xl text-accent-foreground text-gray-900">
      Voltar para o{' '}
      <Link to="/" className="text-sky-600 dark:text-sky-400">
        Dashboard
      </Link>
    </p>
  </div>
)
