import { useEffect, useRef } from 'react'
import { Scene } from '../../core/index.js'
import Camera from '../../engine/Camera.js'
import EntityManager from '../../engine/ecs/EntityManager.js'
import PositionComponent from '../../engine/ecs/PositionComponent.js'
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
    const entityManager = new EntityManager()
    const renderer = new CanvasRenderer(canvas, camera)
    const systemManager = new SystemManager()
    const sampleEntity = entityManager.createEntity('Sample Entity')

    sampleEntity.addComponent(new PositionComponent(400, 300))
    scene.addEntity(sampleEntity)

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
