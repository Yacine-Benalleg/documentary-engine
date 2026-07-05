/**
 * Registers and updates engine systems in order.
 */
export default class SystemManager {
  constructor() {
    this.systems = []
  }

  /**
   * Adds a system at the end of the update order.
   *
   * @param {{ name: string, update: (scene: unknown, deltaTime: number) => void }} system
   * @returns {{ name: string, update: (scene: unknown, deltaTime: number) => void }}
   */
  addSystem(system) {
    this.systems.push(system)
    return system
  }

  /**
   * Removes a system by name.
   *
   * @param {string} name
   * @returns {boolean}
   */
  removeSystem(name) {
    const index = this.systems.findIndex((system) => system.name === name)

    if (index === -1) {
      return false
    }

    this.systems.splice(index, 1)
    return true
  }

  /**
   * Updates all systems in registration order.
   *
   * @param {unknown} scene
   * @param {number} deltaTime
   * @returns {void}
   */
  update(scene, deltaTime) {
    this.systems.forEach((system) => {
      system.update(scene, deltaTime)
    })
  }
}
