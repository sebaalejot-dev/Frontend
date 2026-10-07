import Header from "../components/Header"
import Footer from "../components/Footer"

function Horario(){
  return(
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">
            MI HORARIO
        </h2>
      </main>
      <Footer/>
    </div>
  )
}

export default Horario