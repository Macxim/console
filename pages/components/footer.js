import LogoFull from './logo-full';


export default function Footer () {
  return (
    <footer className="relative z-10">
      <div className="taller:static tall:static sm:fixed sm:inset-x-0 sm:bottom-0 sm:mt-0">
        <div className="px-6 py-10 mx-auto sm:px-16 max-w-8xl">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center mx-auto mb-2 sm:flex-1 sm:mb-0">
              <LogoFull />
            </div>
            <div className="mx-auto text-center flex-shrink-0 w-full mt-2 sm:mt-0 text-white/50 lg:mt-0 sm:w-auto text-[0.9375rem] flex sm:items-center flex-col items-start sm:flex-row">
              <div className="order-1 mx-auto mt-4 space-y-1 sm:space-y-0 sm:mt-0 sm:divide-x sm:divide-white/25">
                <a href="https://www.blog.console.xyz/" target="_blank" rel="noopener noreferrer" className="block transition duration-300 sm:inline sm:ml-4 sm:mr-4 text-white/50 hover:text-white">
                  Blog
                </a>
                <a href="https://jobs.console.xyz" target="_blank" rel="noopener noreferrer" className="block transition duration-300 sm:inline sm:pl-4 sm:mr-4 text-white/50 hover:text-white">
                  Jobs
                </a>
                <a href="https://start.console.xyz" target="_blank" rel="noopener noreferrer" className="block transition duration-300 sm:inline sm:mt-0 sm:pl-4 sm:mr-4 text-white/50 hover:text-white">
                  Communities
                </a>
              </div>

              <a href="https://twitter.com/consoledao" target="_blank" rel="noopener noreferrer" className="order-2 mx-auto mt-8 transition duration-300 sm:order-3 sm:mt-0 sm:ml-4 text-white/50 hover:text-white"><span className="sr-only">Twitter</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

