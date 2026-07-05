import Component from './Component.js'

/**
 * Stores geographic position data for an entity.
 */
export default class PositionComponent extends Component {
  /**
   * @param {number} x - Horizontal coordinate, or longitude.
   * @param {number} y - Vertical coordinate, or latitude.
   */
  constructor(x, y) {
    super('position')

    this.x = x
    this.y = y
  }
}
