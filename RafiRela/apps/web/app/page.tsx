const kpis = [
  { label: 'Total produzido hoje', value: '18.240', unit: 'unidades' },
  { label: 'Total de paletes', value: '184', unit: 'paletes' },
  { label: 'Produção por linha', value: '4', unit: 'linhas' },
  { label: 'Turno ativo', value: 'A', unit: 'turno' },
];

const overview = [
  { name: 'Linha 1', value: 42 },
  { name: 'Linha 2', value: 30 },
  { name: 'Linha 3', value: 18 },
  { name: 'Linha 4', value: 10 },
];

const shifts = [
  { name: 'A', value: 26 },
  { name: 'B', value: 24 },
  { name: 'C', value: 22 },
  { name: 'D', value: 28 },
];

const products = [
  { name: 'Massima', value: 36 },
  { name: 'MiraBella', value: 25 },
  { name: 'Primavera', value: 21 },
  { name: 'Santa Clara', value: 18 },
];

const rows = [
  { line: 'Linha 1', product: 'Massima', format: '1 L', pallet: 42, total: 4200 },
  { line: 'Linha 2', product: 'MiraBella', format: '5 L', pallet: 38, total: 3800 },
  { line: 'Linha 3', product: 'Bidão', format: '20 L', pallet: 18, total: 1800 },
  { line: 'Linha 4', product: 'Santa Clara', format: '500 ml', pallet: 22, total: 2200 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-700">RAFINOLE</p>
            <h1 className="mt-2 text-3xl font-bold">Dashboard da Produção</h1>
          </div>
          <div className="rounded-xl bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
            Atualização em tempo real
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">{kpi.label}</div>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-bold">{kpi.value}</span>
                <span className="pb-1 text-xs uppercase text-slate-500">{kpi.unit}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
            <h2 className="mb-4 text-lg font-semibold">Produção por linha</h2>
            <div className="space-y-4">
              {overview.map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex justify-between text-sm text-slate-600">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100">
                    <div className="h-2.5 rounded-full bg-brand-500" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Produção por turno</h2>
            <div className="space-y-3">
              {shifts.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span className="font-medium">Turno {item.name}</span>
                  <span className="text-slate-600">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Produção por produto</h2>
            <div className="space-y-3">
              {products.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-slate-600">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Resumo</h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Matriz linha-produto-formato configurável</li>
              <li>• Restrições de turno fixas: A, B, C, D</li>
              <li>• Total de unidades calculado automaticamente</li>
              <li>• Auditoria e RBAC preparados para produção</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Registo recente</h2>
            <button className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white">Novo registo</button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Linha</th>
                  <th className="px-4 py-3 font-medium">Produto</th>
                  <th className="px-4 py-3 font-medium">Formato</th>
                  <th className="px-4 py-3 font-medium">Paletes</th>
                  <th className="px-4 py-3 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={`${row.line}-${row.product}-${index}`} className="border-t border-slate-200">
                    <td className="px-4 py-3">{row.line}</td>
                    <td className="px-4 py-3">{row.product}</td>
                    <td className="px-4 py-3">{row.format}</td>
                    <td className="px-4 py-3">{row.pallet}</td>
                    <td className="px-4 py-3 font-medium text-brand-700">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
