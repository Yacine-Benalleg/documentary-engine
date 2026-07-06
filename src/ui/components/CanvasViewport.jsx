import { useEffect, useRef } from 'react'
import Engine from '../../engine/Engine.js'

/**
 * React shell for the engine canvas.
 *
 * This component only creates and starts the Engine. Runtime ownership stays
 * outside React.
 */
export default function CanvasViewport() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const engine = new Engine(canvas)

    engine.start()
    return () => {
      engine.stop()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="canvas-viewport"
      aria-label="Documentary Engine viewport"
    />
  )
}
