import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import React from 'react'

export default function Dashboard() {
  const router = useRouter();

  const menuItems2 = [
    {
      href: '/',
      title: 'Achievement',
      src: 'document-report',
    },
    {
      href: '/productivity',
      title: 'Productivity',
      src: 'presentation-chart-line',
    },
    {
      href: '/hourlyProgress',
      title: 'Hourly Progress',
      src: 'clock',
    },
    {
      href: '/rank',
      title: 'Rank',
      src: 'star',
    },
  ];

  return (
    <div className="relative w-60 overflow-hidden">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
      <div className="h-12 w-full pl-5 flex items-center">
        <h1 className="text-lg font-semibold">
          Dashboard
        </h1>
      </div>

      {/* <!-- Arrow Icon --> */}
      <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* <!-- Content --> */}
      <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-96">
        <ul>
          {menuItems2.map(({ href, title, src }) => (
            <li className='m-2' key={title}>
              <Link href={href} passHref>
                <a
                  className={`flex bg-[#F5F5FF] rounded-lg hover:bg-indigo-400 cursor-pointer pl-3
                          ${router.asPath === href && 'bg-[#4C4DDC] text-white'}`}
                >
                  <button className='flex'>
                    <Image className="flex" src={`/icon/${src}.svg`} width={20} height={32} alt="logo" />
                    <span className='pt-1 pl-3'> {title} </span>
                  </button>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-2 border-b-2 border-slate-400"></div>
    </div>
  )
}

