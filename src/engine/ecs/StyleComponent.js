import Component from './Component.js'

/**
 * Stores visual style data for an entity.
 */
export default class StyleComponent extends Component {
  /**
   * @param {string} color
   * @param {number} [opacity=1]
   * @param {boolean} [glow=false]
   * @param {number} [zIndex=0]
   */
  constructor(color, opacity = 1, glow = false, zIndex = 0) {
    super('style')

    this.color = color
    this.opacity = opacity
    this.glow = glow
    this.zIndex = zIndex
  }
}
