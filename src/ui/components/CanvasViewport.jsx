import { useEffect, useRef } from 'react'
import { Scene } from '../../core/index.js'
import Camera from '../../engine/Camera.js'
import CanvasRenderer from '../../engine/render/CanvasRenderer.js'
import RenderSystem from '../../engine/systems/RenderSystem.js'
import SystemManager from '../../engine/systems/SystemManager.js'

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
    const systemManager = new SystemManager()

    renderer.setViewport(window.innerWidth, window.innerHeight)
    systemManager.addSystem(new RenderSystem(renderer))
    systemManager.update(scene, 0)

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
