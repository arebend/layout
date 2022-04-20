import Image from 'next/image';
import Operation from '../pages/operation';
import Dashboard from '../pages/dashboard';
import Administrator from '../pages/administrator';
import Manager from '../pages/manager';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='sticky top-0 h-16 flex'>
        <div className='flex flex-col md:flex-row flex-1'>
          {/* Start Logo */}
          <aside className='bg-[#F5F5FF] w-full md:w-60'>
            <div className=" flex place-content-center justify-center items-center p-3 lg-px5">
              <div className="flex items-center">
                <Image className="" src="/icon/radaba.svg" width={24} height={32} alt="logo" />
              </div>
              <p className="text-3xl font-semibold bg-[#4C4DDC] bg-clip-text text-transparent pl-1">
                Radaba
              </p>
            </div>
          </aside>
          {/* End Logo */}

          {/* Start Profile */}
          <main className='flex-1 bg-teal-100'>
            <div className='flex h-full flex-col justify-center items-center bg-amber-0'>
              <h1 className='font-bold'>Profile USER</h1>
            </div>
          </main>
          {/* End Profile */}
        </div>
      </header>


      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-[#F5F5FF] w-full md:w-60'>
          <nav>
            {/* Start Operation */}
            <Operation />
            {/* End Operation */}

            {/* Start Dashboard */}
            <Dashboard />
            {/* End Dashboard */}

            {/* Start Manager */}
            <Manager />
            {/* End Manager */}

            {/* Start Administrator */}
            <Administrator />
            {/* End Administrator */}
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
