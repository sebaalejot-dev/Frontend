import Header from "../components/Header"
import Footer from "../components/Footer"
import SeccionForm from "../components/AsignaturaForm"
import SeccionCard from "../components/AsignaturaCard"

function OfertaAcademica({ secciones, agregarSeccion }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Oferta Académica
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Período 2026 · Gestión de secciones (Docente/Coordinador)
        </p>

        <SeccionForm onAgregar={agregarSeccion} />

        {secciones.length === 0 ? (
          <p className="text-center text-gray-400 italic">
            Aún no hay secciones creadas.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {secciones.map((s) => (
              <SeccionCard
                asignatura={s.asignatura}
                docente={s.docente}
                sede={s.sede}
                jornada={s.jornada}
                modalidad={s.modalidad}
                cupo={s.cupo}
                sala={s.sala}
                periodo={s.periodo}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default OfertaAcademica