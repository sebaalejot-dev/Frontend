import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MisSecciones({ secciones }) {
  const [docenteActual, setDocenteActual] = useState("")
  const [seccionAbierta, setSeccionAbierta] = useState(null)

  const nombresDocentes = [...new Set(secciones.map((s) => s.docente))]

  const misSecciones = secciones.filter((s) => s.docente === docenteActual)

  const EstudianteEjemplos = ["Juan Pérez", "María González", "Pedro Soto"]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Mis Secciones
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Consulta tus secciones
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 max-w-md mx-auto">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre de Docente
          </label>
          <select
            value={docenteActual}
            onChange={(e) => setDocenteActual(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
          >
            <option value="">Selecciona perfil de Docente </option>
            {nombresDocentes.map((nombre) => (
              <option value={nombre}>{nombre}</option>
            ))}
          </select>
        </div>

        {docenteActual === "" ? (
          <p className="text-center text-gray-400 italic">
            Selecciona tu nombre para ver tus secciones asignadas.
          </p>
        ) : misSecciones.length === 0 ? (
          <p className="text-center text-gray-400 italic">
            No tienes secciones asignadas.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {misSecciones.map((s, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#c9a227]">
                <h3 className="text-xl font-bold text-gray-800">{s.asignatura}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {s.sede} · {s.jornada} · {s.modalidad}
                </p>
                <p className="text-sm text-gray-600 mt-2">Sala: {s.sala} · Período: {s.periodo}</p>
                <p className="text-sm text-gray-600">Cupo: {s.cupo}</p>

                <button
                  onClick={() => setSeccionAbierta(seccionAbierta === index ? null : index)}
                  className="mt-4 bg-[#0b1e3d] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
                >
                  {seccionAbierta === index ? "Ocultar nómina" : "Ver nómina de estudiantes"}
                </button>

                {seccionAbierta === index && (
                  <ul className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-1">
                    {EstudianteEjemplos.map((estudiante, i) => (
                      <li key={i}>{estudiante}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default MisSecciones