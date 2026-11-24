import { Lockbox, type LockboxState } from '@/components/mascot/Lockbox'

const states: LockboxState[] = [
  'greeting',
  'thinking',
  'encrypted',
  'decrypted',
  'worried',
  'alarm',
]

// Pantalla temporal: muestra los estados de la mascota mientras se construye el chat.
export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <h1 className="text-center text-3xl font-bold">LockBox256</h1>
      <p className="mt-2 text-center text-slate-400">Estados de Lockbox</p>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3">
        {states.map((state) => (
          <figure key={state} className="flex flex-col items-center gap-2">
            <Lockbox state={state} size={120} />
            <figcaption className="text-sm text-slate-400">{state}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}
