import Header from "../components/Header"
import Footer from "../components/Footer"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#14213d] mb-1">
          Bienvenido/a
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Sistema de Gestión Académica UNAB · Período 2026 · Matrícula vigente
        </p>

        <div className="flex flex-wrap gap-5">
          <div className="bg-white rounded-lg shadow-md p-6 w-60 border-t-4 border-[#c9a227] hover:-translate-y-1 transition duration-150">
            <h3 className="text-[#14213d] font-semibold mb-2">Oferta Académica</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Consulta las secciones disponibles este período, filtra por jornada, modalidad y cupos disponibles.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-60 border-t-4 border-[#c9a227] hover:-translate-y-1 transition duration-150">
            <h3 className="text-[#14213d] font-semibold mb-2">Mi Horario</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Revisa tu horario semanal con las secciones en las que te encuentras inscrito/a actualmente.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-60 border-t-4 border-[#c9a227] hover:-translate-y-1 transition duration-150">
            <h3 className="text-[#14213d] font-semibold mb-2">Inscripciones</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gestiona tus asignaturas del semestre e inscribe nuevas secciones dentro del período habilitado.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-60 border-t-4 border-[#c9a227] hover:-translate-y-1 transition duration-150">
            <h3 className="text-[#14213d] font-semibold mb-2">Estudiante</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Consulta tu información académica: carrera, plan de estudios y estado de matrícula.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-10">
          <img
            src="/img/group-young-adults-studying-together-having-good-time-school-library.jpg"
            alt="Estudiantes en biblioteca"
            className="block w-full h-80 object-cover rounded-t-lg"
          />

          <section className="bg-white rounded-b-lg shadow-md p-6">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              28 de agosto, 2026
            </span>
            <h2 className="text-xl font-bold text-[#14213d] mt-2 mb-3 leading-snug">
              UNAB inaugura nuevo espacio de estudio colaborativo en Biblioteca Central
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Como parte del plan de modernización de infraestructura académica, la universidad
              habilitó una nueva sala de estudio colaborativo con capacidad para 120 estudiantes,
              equipada con salas grupales, puntos de carga y conexión Wi-Fi de alta velocidad.
              La iniciativa busca fortalecer los espacios de trabajo entre pares durante el período
              de evaluaciones.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard