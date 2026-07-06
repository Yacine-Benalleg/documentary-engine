import { Scene } from '../core/index.js'
import Camera from './Camera.js'
import Viewport from './core/Viewport.js'
import EntityManager from './ecs/EntityManager.js'
import PositionComponent from './ecs/PositionComponent.js'
import CanvasRenderer from './render/CanvasRenderer.js'
import RenderSystem from './systems/RenderSystem.js'
import SystemManager from './systems/SystemManager.js'

/**
 * Owns the engine runtime and main update loop.
 *
 * Engine creates and connects the scene, camera, viewport, renderer, and
 * systems. React should only instantiate Engine and start or stop it.
 */
export default class Engine {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas
    this.scene = new Scene()
    this.camera = new Camera()
    this.viewport = new Viewport(0, 0, this.camera)
    this.renderer = new CanvasRenderer(canvas, this.camera, this.viewport)
    this.systemManager = new SystemManager()
    this.entityManager = new EntityManager()
    this.isRunning = false
    this.animationFrameId = null
    this.lastTime = 0

    this.systemManager.addSystem(new RenderSystem(this.renderer))
    this.renderer.setViewport(this.getWidth(), this.getHeight())
    this.createDemoWorld()
  }

  /**
   * Starts the engine loop.
   *
   * @returns {void}
   */
  start() {
    if (this.isRunning) {
      return
    }

    this.isRunning = true
    this.lastTime = performance.now()
    this.animationFrameId = requestAnimationFrame(this.tick)
  }

  /**
   * Stops the engine loop.
   *
   * @returns {void}
   */
  stop() {
    this.isRunning = false

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }
  }

  /**
   * Updates every registered system.
   *
   * @param {number} deltaTime
   * @returns {void}
   */
  update(deltaTime) {
    this.systemManager.update(this.scene, deltaTime)
  }

  /**
   * Advances one animation frame.
   *
   * @param {number} currentTime
   * @returns {void}
   */
  tick = (currentTime) => {
    if (!this.isRunning) {
      return
    }

    const deltaTime = (currentTime - this.lastTime) / 1000

    this.lastTime = currentTime
    this.update(deltaTime)
    this.animationFrameId = requestAnimationFrame(this.tick)
  }

  /**
   * Creates the current minimal world demonstration.
   *
   * @returns {void}
   */
  createDemoWorld() {
    const entity = this.entityManager.createEntity('World Origin')

    entity.addComponent(new PositionComponent(0, 0))
    this.scene.addEntity(entity)
  }

  /**
   * Reads the canvas display width.
   *
   * @returns {number}
   */
  getWidth() {
    return this.canvas.clientWidth || this.canvas.width
  }

  /**
   * Reads the canvas display height.
   *
   * @returns {number}
   */
  getHeight() {
    return this.canvas.clientHeight || this.canvas.height
  }
}
