export type LockboxState =
  | 'greeting'
  | 'thinking'
  | 'encrypted'
  | 'decrypted'
  | 'worried'
  | 'alarm'

const labels: Record<LockboxState, string> = {
  greeting: 'Lockbox saludando',
  thinking: 'Lockbox procesando',
  encrypted: 'Lockbox: archivo cifrado',
  decrypted: 'Lockbox: archivo descifrado',
  worried: 'Lockbox preocupado',
  alarm: 'Lockbox en alerta',
}

// Carga todas las imágenes de src/assets/lockbox/ (greeting.gif, thinking.gif, ...).
// El nombre del archivo, sin extensión, debe coincidir con el estado.
const files = import.meta.glob<string>('@/assets/lockbox/*.{webp,png,gif}', {
  eager: true,
  import: 'default',
})

const images: Partial<Record<LockboxState, string>> = {}
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.(webp|png|gif)$/, '') as LockboxState
  images[name] = url
}

interface LockboxProps {
  state: LockboxState
  size?: number
}

export function Lockbox({ state, size = 160 }: LockboxProps) {
  const src = images[state] ?? images.greeting

  if (!src) {
    // Mientras no existan las imágenes, se muestra un marcador.
    return (
      <div
        role="img"
        aria-label={labels[state]}
        style={{ width: size, height: size }}
        className="grid place-items-center rounded-2xl border border-dashed border-slate-600 text-xs text-slate-500"
      >
        {state}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={labels[state]}
      width={size}
      height={size}
      draggable={false}
      className="select-none object-contain"
    />
  )
}
