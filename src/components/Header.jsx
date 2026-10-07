import { Link } from "react-router-dom"
function Header(){
  return(<>
    <header className="bg-[#0b1e3d] shadow-xl">
      <div className="container mx-auto px-6 py-8 text-center">
       <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Sistema Académico UNAB
       </h1>
       <p className="text-gray-300 mt-2 text-sm">
        Gestión académica UNAB
       </p>
      </div>
      <nav className="flex flex-wrap justify-center gap-3 px-4 pb-6">
       <Link to="/dashboard"
       className="bg-[#7393B3] text-gray-200 px-5 py-2 rounded-lg font-medium border-b-2 border-transparent
       hover:border-[#c9a227] hover:text-white transition duration-200">
        Inicio
       </Link>
       <Link to="/oferta-academica"
       className="bg-[#7393B3] text-gray-200 px-5 py-2 rounded-lg font-medium border-b-2 border-transparent
       hover:border-[#c9a227] hover:text-white transition duration-200">
        Oferta Académica
       </Link>
       <Link to="/horario"
       className="bg-[#7393B3] text-gray-200 px-5 py-2 rounded-lg font-medium border-b-2 border-transparent
       hover:border-[#c9a227] hover:text-white transition duration-200">
        Mi Horario
       </Link>
       <Link to="/inscripciones"
       className="bg-[#7393B3] text-gray-200 px-5 py-2 rounded-lg font-medium border-b-2 border-transparent
       hover:border-[#c9a227] hover:text-white transition duration-200">
        Inscripciones
       </Link>
       <Link to="/mis-secciones"
        className="bg-[#7393B3] text-gray-200 px-5 py-2 rounded-lg font-medium border-b-2 border-transparent
       hover:border-[#c9a227] hover:text-white transition duration-200">
        Mis Secciones
        </Link>
      </nav>
    </header>  
  </>
  )}
export default Header