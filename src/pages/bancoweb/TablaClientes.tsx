import { useEffect, useState } from "react";

interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  telefono: string;
  tipo_cuenta: string;
  saldo: string;
  fecha_apertura: string;
}

const tipoBadge: Record<string, { label: string; className: string }> = {
  ahorros:    { label: "Ahorros",    className: "bg-green-100 text-green-700" },
  corriente:  { label: "Corriente",  className: "bg-blue-100 text-blue-700" },
  plazo_fijo: { label: "Plazo Fijo", className: "bg-yellow-100 text-yellow-700" },
};

export default function TablaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://wyper.alwaysdata.net/banco.php")
      .then((r) => { if (!r.ok) throw new Error("Error al cargar"); return r.json(); })
      .then((data: Cliente[]) => { setClientes(data); setLoading(false); })
      .catch((e: Error) => { setError(e.message); setLoading(false); });
  }, []);

  const filtrados = clientes.filter((c) =>
    `${c.nombre} ${c.apellido} ${c.dni} ${c.email}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="p-8 font-sans justify-center h-120">

      {/* Header */}
      <div className="flex items-center mb-5 flex-wrap gap-4 justify-center">
        <h2 className=" text-xl font-bold text-gray-800">
          Clientes — <span className="text-gray-400 font-normal">{filtrados.length} registros</span>
        </h2>
        <input
          type="text"
          placeholder="Buscar por nombre, DNI o email..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="px-4  py-2 rounded-lg border border-gray-200 text-sm bg-gray-50 text-gray-700 outline-none focus:border-green-500 w-64"
        />
      </div>

      {/* Estados */}
      {loading && <p className="text-center text-gray-400 py-10">Cargando clientes...</p>}
      {error   && <p className="text-center text-red-500 py-10">{error}</p>}

      {/* Tabla */}
      {!loading && !error && (
        <div className="tabla overflow-x-auto rounded-xl border w-1/2 border-gray-200 shadow-sm ">
          <table className="w-full text-sm border-collapse" >
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 h-10" >
                {["ㅤㅤ#", "Nombre", "DNI", "Email", "Teléfono", "Tipo", "Saldo", "Apertura"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-gray-600 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtrados.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-400">
                    Sin resultados
                  </td>
                </tr>
              ) : filtrados.map((c, i) => {
                const tipo = tipoBadge[c.tipo_cuenta] ?? { label: c.tipo_cuenta, className: "bg-gray-100 text-gray-600" };
                return (
                  <tr key={c.id} className={`border-b border-gray-100 h-7 hover:bg-green-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-4 py-3 text-gray-400">ㅤㅤ{c.id}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{c.nombre} {c.apellido}</td>
                    <td className="px-4 py-3 text-gray-600 font-mono">{c.dni}</td>
                    <td className="px-4 py-3 text-gray-600">{c.email}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{c.telefono}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tipo.className}`}>
                        {tipo.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-green-600 whitespace-nowrap">
                      {new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(parseFloat(c.saldo))}
                    </td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                      {new Date(c.fecha_apertura).toLocaleDateString("es-PE", { day: "2-digit", month: "short", year: "numeric" })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
