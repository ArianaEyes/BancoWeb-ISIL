
const Header = () => {
  return (
    <header className="header text-white flex items-center justify-between px-4">
      <div className="title">
        <h1>Contact Us</h1>
        <div className="title-div">
          <p>Home</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>

          <p>Contact Us</p>
        </div>
      </div>


        <div className="header-nav">
          <div className="logo"></div>
      <nav>
        <a>Home</a>
        <a>Services</a>
        <a>Project</a>
        <a className="underline">Page</a>
        <a>Blog</a>
        <a className="underline">Contact Us</a>
      </nav>
      <div className=" zona-tel flex h-16 w-120" >
        {/* Icono de telefono */}
         <img className="mr-5" src="/public/icons/tel.svg" alt="icono" width={26} height={26} />

        {/*  Lista */}
        <ul>
          <li className="font-semibold">Need Help?</li>
          <li className="font-bold ff">(+480) 123 678 900</li>
        </ul>
        {/* Icono de busqueda */}
        
        <div className="busqueda">
          <img src="/public/icons/buscar.svg" alt="icono" width={24} height={24} />

        </div>
        <button className="btn-contact">Get a Quote! 
          <img src="/public/icons/flecha.svg" alt="icono" width={24} height={24} />
        </button>
      </div>
        </div>

    </header>
  )
}

export default Header
