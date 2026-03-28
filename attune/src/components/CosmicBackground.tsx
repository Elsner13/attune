export default function CosmicBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background:
          'radial-gradient(ellipse at 50% 45%, #0d0003 0%, #080001 30%, #030000 60%, #000000 100%)',
        pointerEvents: 'none',
      }}
    />
  )
}
