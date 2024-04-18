import { useEffect, useState } from 'react'
import Link from 'next/link'

const Title = (): JSX.Element => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true)

  const toggleDescription = (): void => {
    const description = document.querySelector('.description')
    const indexTitle = document.querySelector('.index-title')

    description.classList.toggle('max-h-0')
    description.classList.toggle('max-h-56')
    description.classList.toggle('sm:max-h-18')
    description.classList.toggle('sm:mt-24')

    indexTitle.classList.toggle('top-0')
    indexTitle.classList.toggle('-top-14')
    indexTitle.classList.toggle('-translate-x-1/2')
    indexTitle.classList.toggle('left-1/2')
    indexTitle.classList.toggle('left-4')
    indexTitle.classList.toggle('scale-50')

    setIsDescriptionOpen((prev) => !prev)
    localStorage.setItem(
      'isDescriptionOpen',
      JSON.stringify(!isDescriptionOpen)
    )
  }

  // restores description state
  useEffect(() => {
    const description = document.querySelector('.description')
    const indexTitle = document.querySelector('.index-title')

    if (JSON.parse(localStorage.getItem('isDescriptionOpen')) === false) {
      description.classList.add('max-h-0')
      description.classList.remove('max-h-56')
      description.classList.remove('sm:max-h-18')
      description.classList.remove('sm:mt-24')

      indexTitle.classList.remove('top-0')
      indexTitle.classList.add('-top-14')
      indexTitle.classList.remove('-translate-x-1/2')
      indexTitle.classList.remove('left-1/2')
      indexTitle.classList.add('left-4')
      indexTitle.classList.add('scale-50')

      setIsDescriptionOpen(false)
    }

    setTimeout(() => {
      description.classList.add('transition-[margin,max-height]')
      indexTitle.classList.add('transition-[left,top,transform]')
      description.classList.add('duration-300')
      indexTitle.classList.add('duration-300')
    }, 100)

    description.classList.remove('invisible')
    indexTitle.classList.remove('invisible')
  }, [])

  return (
    <div className='px-4 text-lg text-center text-slate-600 dark:text-slate-400'>
      {/* HIDE TITLE AND DESCRIPTION */}
      <button
        onClick={toggleDescription}
        className='absolute z-50 text-xl right-[1.6rem] sm:right-7 -top-2 sm:top-4 hover:text-indigo-600 hover:dark:text-indigo-400'>
        <span className='sr-only'>Hide/Show Description</span>
        <span>{isDescriptionOpen ? '⊖' : '⊕'}</span>
      </button>

      {/* TITLE */}
      <Link passHref href='/'>
        <a>
          <h1 className='absolute top-0 items-end justify-center invisible hidden text-5xl font-semibold origin-left -translate-x-1/2 index-title left-1/2 sm:flex text-slate-700 dark:text-slate-300'>
            <div className='w-16 h-16'>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 200.00 200.00">
              <path fill="#f05011" d="
                M 168.43 109.09
                Q 175.77 107.31 184.66 105.38
                Q 188.34 104.58 189.77 108.05
                Q 189.81 108.16 189.82 108.28
                Q 190.11 112.32 186.42 113.16
                Q 176.62 115.38 166.79 117.67
                Q 166.51 117.73 166.43 118.00
                L 165.37 121.80
                Q 165.29 122.06 165.56 122.00
                Q 171.68 120.64 179.37 118.86
                C 185.19 117.51 186.93 125.36 181.22 126.67
                Q 172.04 128.78 162.61 130.92
                Q 161.90 131.08 161.58 131.74
                C 146.06 164.52 106.19 179.15 72.92 164.56
                Q 50.44 154.71 39.07 132.63
                A 1.47 1.44 -7.0 0 0 38.09 131.88
                Q 27.81 129.62 18.51 127.45
                C 12.94 126.16 14.73 118.50 20.32 119.74
                Q 27.86 121.41 34.94 123.04
                A 0.20 0.20 0.0 0 0 35.18 122.79
                L 34.10 119.01
                A 0.44 0.42 -1.0 0 0 33.79 118.72
                Q 24.66 116.63 13.63 114.16
                C 7.79 112.85 9.57 105.14 15.11 106.35
                Q 22.77 108.02 31.99 110.18
                Q 32.64 110.33 32.58 109.67
                Q 30.49 87.72 42.17 68.43
                Q 42.48 67.93 42.13 67.45
                C 38.96 63.02 24.23 41.14 33.02 37.54
                C 40.95 34.30 58.56 41.42 66.12 44.73
                A 1.25 1.24 -46.4 0 0 67.19 44.70
                Q 99.65 28.25 132.30 44.27
                A 1.21 1.18 -43.2 0 0 133.30 44.29
                C 140.49 41.13 161.70 32.71 168.26 37.58
                C 174.60 42.30 161.72 61.93 157.90 67.34
                A 0.70 0.68 -44.2 0 0 157.88 68.10
                Q 169.46 86.82 167.82 108.57
                Q 167.77 109.25 168.43 109.09
                Z
                M 133.38 129.39
                Q 139.74 127.90 146.84 126.33
                Q 147.92 126.09 148.36 125.06
                L 149.56 122.28
                Q 149.93 121.41 149.03 121.67
                Q 145.06 122.81 139.75 123.77
                C 134.59 124.70 133.06 117.16 138.40 115.93
                Q 144.94 114.42 151.79 112.87
                A 0.79 0.78 87.8 0 0 152.39 112.22
                Q 155.69 91.19 144.07 74.07
                C 127.58 49.78 93.78 43.70 69.82 60.41
                C 52.49 72.50 44.36 92.38 48.10 113.26
                Q 48.21 113.83 48.77 113.96
                L 61.42 116.83
                Q 65.19 117.68 64.81 121.53
                Q 64.77 121.97 64.54 122.36
                Q 62.93 125.07 60.59 124.65
                Q 55.34 123.70 51.00 122.58
                A 0.12 0.12 0.0 0 0 50.86 122.75
                L 52.82 126.86
                A 0.62 0.59 -4.9 0 0 53.22 127.18
                L 66.59 130.22
                Q 70.34 131.07 69.92 134.90
                Q 69.83 135.71 69.20 136.36
                Q 67.13 138.49 64.22 137.84
                L 59.98 136.88
                Q 59.22 136.71 59.75 137.28
                Q 74.71 153.65 95.24 155.35
                Q 122.51 157.61 141.43 136.25
                Q 142.05 135.54 141.15 135.79
                Q 138.01 136.63 134.97 137.22
                C 129.45 138.30 127.78 130.71 133.38 129.39
                Z"
              />
              <circle fill="#ffa11b" cx="72.64" cy="90.99" r="9.00"/>
              <circle fill="#ffa11b" cx="126.98" cy="90.99" r="8.99"/>
              <path fill="#ffa11b" d="
                M 93.36 133.87
                C 89.16 129.56 81.18 117.14 88.37 112.22
                C 93.14 108.97 105.19 108.92 109.98 112.07
                C 117.60 117.07 109.25 130.06 104.94 134.28
                Q 99.21 139.88 93.36 133.87
                Z"
              />
              </svg>
            </div>
            <span className=''>TailwindCat</span>
          </h1>
        </a>
      </Link>
      {/* DESCRIPTION */}
      <p className='invisible max-w-3xl mx-auto overflow-hidden title-description sm:mt-24 description max-h-56 sm:max-h-18 sm:indent-0 indent-8'>
        You always forget property names? You want to convert a unit to the
        corresponding tailwind class? Or you are simply learning tailwind and
        would like a bit of help visualizing classes? Then this tool might come
        in handyǃ
      </p>
    </div>
  )
}

export default Title
