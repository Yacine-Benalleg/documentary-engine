import Renderer from './Renderer.js'

/**
 * Canvas 2D renderer for scene entities.
 *
 * CanvasRenderer owns only its canvas drawing context. Scene and camera state
 * are supplied from outside. It renders only entities with position data in
 * this first scene-rendering version.
 */
export default class CanvasRenderer extends Renderer {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {unknown} camera
   * @param {{ worldToScreen: (x: number, y: number) => { x: number, y: number }, resize: (width: number, height: number) => void }} viewport
   */
  constructor(canvas, camera, viewport) {
    super(camera)

    this.canvas = canvas
    this.viewport = viewport
    this.context = canvas.getContext('2d')

    if (!this.context) {
      throw new Error('CanvasRenderer requires a 2D rendering context.')
    }

    this.setViewport(canvas.width, canvas.height)
  }

  /**
   * Renders positioned scene entities.
   *
   * @param {{ entities: Map<string, { hasComponent: (type: string) => boolean, getComponent: (type: string) => { x: number, y: number } | undefined }> }} scene
   * @returns {void}
   */
  render(scene) {
    this.clear()

    this.context.fillStyle = '#ffffff'

    scene.entities.forEach((entity) => {
      if (!entity.hasComponent('position')) {
        return
      }

      const position = entity.getComponent('position')
      const screenPosition = this.viewport.worldToScreen(position.x, position.y)

      this.context.beginPath()
      this.context.arc(screenPosition.x, screenPosition.y, 4, 0, Math.PI * 2)
      this.context.fill()
    })
  }

  /**
   * Clears the canvas with a dark background.
   *
   * @returns {void}
   */
  clear() {
    this.context.fillStyle = '#111827'
    this.context.fillRect(0, 0, this.width, this.height)
  }

  /**
   * Sets the canvas and viewport dimensions.
   *
   * @param {number} width
   * @param {number} height
   * @returns {void}
   */
  setViewport(width, height) {
    super.setViewport(width, height)
    this.viewport.resize(width, height)
    this.canvas.width = width
    this.canvas.height = height
  }
}
