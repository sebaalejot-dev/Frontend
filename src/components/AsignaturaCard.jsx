export default function AsignaturaCard({ asignatura, docente, sede, jornada, modalidad, cupo, sala, periodo }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-6 border-t-4 border-[#c9a227]">
      <h2 className="text-xl font-bold text-gray-800 text-center">
        {asignatura}
      </h2>
      <p className="text-gray-500 text-center mt-1 text-sm">
        Prof. {docente}
      </p>
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><span className="font-semibold">Sede:</span> {sede}</p>
        <p><span className="font-semibold">Jornada:</span> {jornada} · {modalidad}</p>
        <p><span className="font-semibold">Sala:</span> {sala}</p>
        <p><span className="font-semibold">Período:</span> {periodo}</p>
      </div>
      <div className="mt-4 text-center">
        <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
          {cupo} cupos
        </span>
      </div>
    </div>
  )
}