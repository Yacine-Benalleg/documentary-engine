import { useEffect, useRef } from 'react'
import { Scene } from '../../core/index.js'
import Camera from '../../engine/Camera.js'
import CanvasRenderer from '../../engine/render/CanvasRenderer.js'

/**
 * React shell for the engine canvas.
 *
 * This component only initializes engine objects and asks the renderer to draw
 * one frame. Drawing stays inside CanvasRenderer, outside React.
 */
export default function CanvasViewport() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const scene = new Scene()
    const camera = new Camera()
    const renderer = new CanvasRenderer(canvas, camera)

    renderer.setViewport(window.innerWidth, window.innerHeight)
    renderer.render(scene)

    return () => {
      renderer.clear()
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
