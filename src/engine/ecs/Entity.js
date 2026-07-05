/**
 * Represents an ECS entity.
 *
 * Entities are lightweight containers with a unique ID, optional display name,
 * and a collection of components keyed by component type.
 */
export default class Entity {
  /**
   * @param {string} id - Unique entity identifier.
   * @param {string} [name=''] - Human-readable entity name.
   */
  constructor(id, name = '') {
    this.id = id
    this.name = name
    this.components = new Map()
  }

  /**
   * Adds or replaces a component on the entity.
   *
   * @param {{ type: string }} component
   * @returns {{ type: string }}
   */
  addComponent(component) {
    this.components.set(component.type, component)
    return component
  }

  /**
   * Removes a component by type.
   *
   * @param {string} type
   * @returns {boolean}
   */
  removeComponent(type) {
    return this.components.delete(type)
  }

  /**
   * Gets a component by type.
   *
   * @param {string} type
   * @returns {{ type: string } | undefined}
   */
  getComponent(type) {
    return this.components.get(type)
  }

  /**
   * Checks whether the entity has a component type.
   *
   * @param {string} type
   * @returns {boolean}
   */
  hasComponent(type) {
    return this.components.has(type)
  }
}
