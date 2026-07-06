/**
 * Converts between world space and screen space.
 *
 * Viewport is pure engine math. It stores pixel dimensions, derives the screen
 * center, and uses camera world state to project coordinates without touching
 * React, Canvas, DOM, or rendering APIs.
 */
export default class Viewport {
  /**
   * @param {number} width
   * @param {number} height
   * @param {{ x: number, y: number, zoom: number, rotation: number }} camera
   */
  constructor(width, height, camera) {
    this.width = width
    this.height = height
    this.center = { x: width / 2, y: height / 2 }
    this.camera = camera
  }

  /**
   * Converts world coordinates into screen coordinates.
   *
   * @param {number} x
   * @param {number} y
   * @returns {{ x: number, y: number }}
   */
  worldToScreen(x, y) {
    const dx = x - this.camera.x
    const dy = y - this.camera.y
    const cos = Math.cos(-this.camera.rotation)
    const sin = Math.sin(-this.camera.rotation)

    return {
      x: this.center.x + (dx * cos - dy * sin) * this.camera.zoom,
      y: this.center.y + (dx * sin + dy * cos) * this.camera.zoom,
    }
  }

  /**
   * Converts screen coordinates into world coordinates.
   *
   * @param {number} x
   * @param {number} y
   * @returns {{ x: number, y: number }}
   */
  screenToWorld(x, y) {
    const dx = (x - this.center.x) / this.camera.zoom
    const dy = (y - this.center.y) / this.camera.zoom
    const cos = Math.cos(this.camera.rotation)
    const sin = Math.sin(this.camera.rotation)

    return {
      x: this.camera.x + dx * cos - dy * sin,
      y: this.camera.y + dx * sin + dy * cos,
    }
  }

  /**
   * Updates viewport dimensions and center.
   *
   * @param {number} width
   * @param {number} height
   * @returns {void}
   */
  resize(width, height) {
    this.width = width
    this.height = height
    this.center = { x: width / 2, y: height / 2 }
  }

  /**
   * Sets the camera used for coordinate conversion.
   *
   * @param {{ x: number, y: number, zoom: number, rotation: number }} camera
   * @returns {void}
   */
  setCamera(camera) {
    this.camera = camera
  }
}
