/**
 * Abstract base class for ECS components.
 *
 * Components only identify a type in the foundation layer. Concrete component
 * data should be introduced later by subclasses.
 */
export default class Component {
  /**
   * @param {string} type - Unique component type identifier.
   */
  constructor(type) {
    if (new.target === Component) {
      throw new Error('Component is abstract and cannot be instantiated directly.')
    }

    this.type = type
  }
}
