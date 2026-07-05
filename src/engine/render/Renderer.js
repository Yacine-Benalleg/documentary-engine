/**
 * Base renderer architecture for Documentary Engine.
 *
 * Renderer is responsible only for rendering orchestration. It receives camera
 * state and scene data from the outside, but does not own either. Future
 * CanvasRenderer, SVGRenderer, and WebGLRenderer implementations can extend
 * this class and provide concrete drawing behavior.
 */
export default class Renderer {
  /**
   * @param {unknown} camera - Camera state supplied by the engine.
   */
  constructor(camera) {
    this.camera = camera
    this.width = 0
    this.height = 0
  }

  /**
   * Renders a scene.
   *
   * @param {unknown} scene - Scene data supplied by the engine.
   * @returns {void}
   */
  render(scene) {
    void scene
  }

  /**
   * Clears the render target.
   *
   * @returns {void}
   */
  clear() {}

  /**
   * Resizes the renderer viewport.
   *
   * @param {number} width
   * @param {number} height
   * @returns {void}
   */
  resize(width, height) {
    this.setViewport(width, height)
  }

  /**
   * Sets the renderer viewport dimensions.
   *
   * @param {number} width
   * @param {number} height
   * @returns {void}
   */
  setViewport(width, height) {
    this.width = width
    this.height = height
  }
}
