/**
 * Stores engine camera state.
 *
 * Camera is not a React component and does not render anything. It only tracks
 * position, zoom, and rotation for engine systems that may use camera state.
 */
export default class Camera {
  constructor() {
    this.x = 0
    this.y = 0
    this.zoom = 1
    this.rotation = 0
  }

  /**
   * Moves the camera to a new position.
   *
   * @param {number} x
   * @param {number} y
   * @returns {void}
   */
  moveTo(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * Sets the camera zoom.
   *
   * @param {number} value
   * @returns {void}
   */
  zoomTo(value) {
    this.zoom = value
  }

  /**
   * Sets the camera rotation.
   *
   * @param {number} value
   * @returns {void}
   */
  rotateTo(value) {
    this.rotation = value
  }

  /**
   * Restores the default camera state.
   *
   * @returns {void}
   */
  reset() {
    this.x = 0
    this.y = 0
    this.zoom = 1
    this.rotation = 0
  }
}
