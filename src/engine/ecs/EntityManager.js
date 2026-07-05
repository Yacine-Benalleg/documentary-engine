import Entity from './Entity.js'

/**
 * Creates, stores, and retrieves ECS entities.
 *
 * EntityManager owns entity identity for the ECS foundation. It does not know
 * about rendering, animation, maps, or concrete component behavior.
 */
export default class EntityManager {
  constructor() {
    this.entities = new Map()
  }

  /**
   * Creates and stores an entity.
   *
   * @param {string} [name=''] - Human-readable entity name.
   * @returns {Entity}
   */
  createEntity(name = '') {
    const entity = new Entity(crypto.randomUUID(), name)

    this.entities.set(entity.id, entity)

    return entity
  }

  /**
   * Removes an entity by ID.
   *
   * @param {string} id
   * @returns {boolean}
   */
  removeEntity(id) {
    return this.entities.delete(id)
  }

  /**
   * Finds an entity by ID.
   *
   * @param {string} id
   * @returns {Entity | undefined}
   */
  findById(id) {
    return this.entities.get(id)
  }

  /**
   * Returns all managed entities.
   *
   * @returns {Entity[]}
   */
  getAllEntities() {
    return Array.from(this.entities.values())
  }
}
