import Image from 'next/image'
import Link from 'next/link'

type ProjectHeaderProps = {
  url: string
  image?: string
  alt?: string
  title?: string
  italic?: boolean
}

export default function HeaderApi({
  url,
  image,
  alt = 'Project logo',
  title,
  italic = false,
}: ProjectHeaderProps) {
  return (
    <div className='mb-10 flex items-center'>
      <div className='flex-1' />

      <div className='flex flex-1 justify-center'>
        {image ? (
          <Image
            src={image}
            alt={alt}
            width={400}
            height={120}
            className='h-auto w-full max-w-md'
            priority
          />
        ) : (
          <h2
            className={`mx-auto my-8 w-62.5 border-y border-primary px-4 py-2 text-3xl text-center font-semibold text-title ${
              italic ? 'italic' : 'not-italic'
            }`}>
            {title}
          </h2>
        )}
      </div>

      <div className='flex flex-1 justify-center'>
        <Link
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Ver repositorio en GitHub'
          className='transition-transform duration-300 hover:scale-110'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-8 w-8 text-gray-700 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white'>
            <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.19a10.97 10.97 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.58.24 2.75.12 3.04.74.81 1.18 1.85 1.18 3.11 0 4.45-2.71 5.43-5.29 5.71.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z' />
          </svg>
        </Link>
      </div>
    </div>
  )
}

{
  /*
  ? Uso con imagen
    <HeaderApi
      image="/images/simpson/logo.webp"
      url="https://github.com/user/repo"
    />
  ? Uso con título normal
    <HeaderApi
      title="Pokémon API"
      url="https://github.com/user/repo"
    />
  ? Uso con título en cursiva
    <HeaderApi
      title="Rick and Morty API"
      italic
      url="https://github.com/user/repo"
    />
*/
}