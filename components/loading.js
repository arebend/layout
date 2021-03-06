import React from 'react'

export default function Loading() {
  return (
    <div className="place-content-center justify-center items-center pt-96 ">
      <div className="flex items-center place-content-center animate-bounce">
        <svg
          width="55" height="67" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.543457 22.3549C0.543457 10.137 10.448 0.232422 22.666 0.232422C34.8839 0.232422 44.7885 10.137 44.7885 22.3549V34.6452C44.7885 46.8632 34.8839 56.7677 22.666 56.7677C10.448 56.7677 0.543457 46.8632 0.543457 34.6452V22.3549Z" fill="#21217A" />
          <path d="M40.1796 39.2541C40.1796 48.9266 32.3385 56.7677 22.666 56.7677C12.9935 56.7677 5.15232 48.9266 5.15232 39.2541C5.15232 29.5816 12.9935 21.7404 22.666 21.7404C32.3385 21.7404 40.1796 29.5816 40.1796 39.2541Z" fill="#4C4DDC" />
          <path d="M33.7272 45.7065C33.7272 51.8155 28.7749 56.7677 22.666 56.7677C16.557 56.7677 11.6047 51.8155 11.6047 45.7065C11.6047 39.5975 16.557 34.6452 22.666 34.6452C28.7749 34.6452 33.7272 39.5975 33.7272 45.7065Z" fill="#F5F5FF" />
        </svg>
      </div>
      <div className="text-3xl text-center">
        Please wait...
      </div>
      <p className="animate-pulse text-center">This may take a few seconds, please don&apos;t close this page.</p>
    </div>
  )
}
