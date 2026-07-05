import Component from './Component.js'

/**
 * Stores label text and visibility data for an entity.
 */
export default class LabelComponent extends Component {
  /**
   * @param {string} text
   * @param {boolean} [visible=true]
   */
  constructor(text, visible = true) {
    super('label')

    this.text = text
    this.visible = visible
  }
}
