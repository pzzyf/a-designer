import { Toolbar } from '@/components/toolbar'

export function Panel() {
  return (
    <div className="
     flex-1
     overflow-hidden
     bg-size-[15px_15px]
     bg-[image:linear-gradient(var(--designer-color)_14px,transparent_0),linear-gradient(90deg,transparent_14px,var(--designer-dot-color)_0)]"
    >
      <Toolbar />
    </div>
  )
}
