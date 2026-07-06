import Renderer from './Renderer.js'

/**
 * Canvas 2D renderer used to verify the rendering pipeline.
 *
 * CanvasRenderer owns only its canvas drawing context. Scene and camera state
 * are supplied from outside and are not rendered into entities, maps, or labels
 * in this first version.
 */
export default class CanvasRenderer extends Renderer {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {unknown} camera
   */
  constructor(canvas, camera) {
    super(camera)

    this.canvas = canvas
    this.context = canvas.getContext('2d')

    if (!this.context) {
      throw new Error('CanvasRenderer requires a 2D rendering context.')
    }

    this.setViewport(canvas.width, canvas.height)
  }

  /**
   * Renders a pipeline test frame.
   *
   * @param {unknown} scene
   * @returns {void}
   */
  render(scene) {
    void scene

    this.clear()

    this.context.fillStyle = '#ffffff'
    this.context.beginPath()
    this.context.arc(this.width / 2, this.height / 2, 4, 0, Math.PI * 2)
    this.context.fill()
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
    this.canvas.width = width
    this.canvas.height = height
  }
}
