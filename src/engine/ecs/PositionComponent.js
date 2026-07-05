import Component from './Component.js'

/**
 * Stores geographic position data for an entity.
 */
export default class PositionComponent extends Component {
  /**
   * @param {number} latitude
   * @param {number} longitude
   */
  constructor(latitude, longitude) {
    super('position')

    this.latitude = latitude
    this.longitude = longitude
  }
}
