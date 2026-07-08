import useTilt from './useTilt'

export default function TiltCard({ className, style, children, strength = 5 }) {
  const { ref, ...handlers } = useTilt(strength)
  return (
    <div ref={ref} className={className} style={{ ...style, transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s' }} {...handlers}>
      {children}
    </div>
  )
}
