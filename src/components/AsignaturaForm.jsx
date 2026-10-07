import { useState } from "react"

export default function SeccionForm({ onAgregar }) {
  const [asignatura, setAsignatura] = useState("")
  const [docente, setDocente] = useState("")
  const [sede, setSede] = useState("")
  const [jornada, setJornada] = useState("")
  const [modalidad, setModalidad] = useState("")
  const [cupo, setCupo] = useState("")
  const [sala, setSala] = useState("")
  const [periodo, setPeriodo] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const nuevaSeccion = {
      asignatura: asignatura,
      docente: docente,
      sede: sede,
      jornada: jornada,
      modalidad: modalidad,
      cupo: cupo,
      sala: sala,
      periodo: periodo
    }

    onAgregar(nuevaSeccion)

    setAsignatura("")
    setDocente("")
    setSede("")
    setJornada("")
    setModalidad("")
    setCupo("")
    setSala("")
    setPeriodo("")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mb-12">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Crear Nueva Sección
      </h3>
      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Asignatura"
          value={asignatura}
          onChange={(e) => setAsignatura(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
        />
        <input
          type="text"
          placeholder="Docente"
          value={docente}
          onChange={(e) => setDocente(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
        />

        <select
          value={sede}
          onChange={(e) => setSede(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
        >
          <option value="">Selecciona una sede</option>
          <option value="Viña del Mar">Viña del Mar</option>
          <option value="Santiago (Las Condes)">Santiago (Las Condes)</option>
          <option value="Santiago (Antonio Varas)">Santiago (Antonio Varas)</option>
        </select>

        <select
              value={jornada}
              onChange={(e) => setJornada(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
            >
              <option value="">Selecciona una jornada</option>
              <option value="Diurna">Diurna</option>
              <option value="Vespertina">Vespertina</option>
        </select>
        <input
          type="number"
          placeholder="Cupo"
          value={cupo}
          onChange={(e) => setCupo(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
        />
        <input
          type="text"
          placeholder="Sala"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
        />
        <input
          type="text"
          placeholder="Período Académico"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b1e3d]"
        />
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">Modalidad</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modalidad"
              value="Presencial"
              checked={modalidad === "Presencial"}
              onChange={(e) => setModalidad(e.target.value)}
              className="accent-[#0b1e3d]"
            />
            Presencial
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modalidad"
              value="Online"
              checked={modalidad === "Online"}
              onChange={(e) => setModalidad(e.target.value)}
              className="accent-[#0b1e3d]"
            />
            Online
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="modalidad"
              value="Mixta"
              checked={modalidad === "Mixta"}
              onChange={(e) => setModalidad(e.target.value)}
              className="accent-[#0b1e3d]"
            />
            Mixta
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full md:w-auto bg-[#0b1e3d] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Crear Sección
      </button>
    </form>
  )
}