/**
 * Abstract base class for engine systems.
 *
 * Systems define update behavior over scene data. Concrete systems should be
 * introduced later and must avoid rendering or animation work unless explicitly
 * added as separate architecture.
 */
export default class System {
  /**
   * @param {string} name - Unique system name.
   */
  constructor(name) {
    if (new.target === System) {
      throw new Error('System is abstract and cannot be instantiated directly.')
    }

    this.name = name
  }

  /**
   * Updates the system.
   *
   * @param {unknown} scene
   * @param {number} deltaTime
   * @returns {void}
   */
  update() {
    throw new Error(
      `${this.name} must implement update(scene, deltaTime).`,
    )
  }
}
