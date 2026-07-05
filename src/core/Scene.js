/**
 * @typedef {import('./Animation.js').Animation} Animation
 * @typedef {import('./Camera.js').Camera} Camera
 * @typedef {import('./Entity.js').Entity} Entity
 * @typedef {import('./Layer.js').Layer} Layer
 */

/**
 * Metadata attached to a Scene.
 *
 * This is intentionally open-ended so projects can describe documentary
 * context, authorship, source material, or editor state without changing the
 * core Scene API.
 *
 * @typedef {Record<string, unknown>} SceneMetadata
 */

/**
 * Owns every object in the documentary world.
 *
 * Scene is the central data container for Version 0.1. It tracks layers,
 * entities, animations, camera state, and metadata without implementing
 * rendering, GSAP integration, or map loading.
 */
export default class Scene {
  /**
   * @param {SceneMetadata} [metadata={}]
   */
  constructor(metadata = {}) {
    /** @type {Map<string, Layer>} */
    this.layers = new Map();

    /** @type {Map<string, Entity>} */
    this.entities = new Map();

    /** @type {Map<string, Animation>} */
    this.animations = new Map();

    /** @type {Camera | null} */
    this.camera = null;

    /** @type {SceneMetadata} */
    this.metadata = metadata;
  }

  /**
   * Adds an entity to the Scene.
   *
   * @param {Entity} entity
   * @returns {Entity}
   */
  addEntity(entity) {
    this.entities.set(entity.id, entity);
    return entity;
  }

  /**
   * Removes an entity from the Scene.
   *
   * @param {string} entityId
   * @returns {boolean}
   */
  removeEntity(entityId) {
    return this.entities.delete(entityId);
  }

  /**
   * Adds a layer to the Scene.
   *
   * @param {Layer} layer
   * @returns {Layer}
   */
  addLayer(layer) {
    this.layers.set(layer.id, layer);
    return layer;
  }

  /**
   * Removes a layer from the Scene.
   *
   * @param {string} layerId
   * @returns {boolean}
   */
  removeLayer(layerId) {
    return this.layers.delete(layerId);
  }

  /**
   * Adds an animation to the Scene.
   *
   * @param {Animation} animation
   * @returns {Animation}
   */
  addAnimation(animation) {
    this.animations.set(animation.id, animation);
    return animation;
  }

  /**
   * Removes an animation from the Scene.
   *
   * @param {string} animationId
   * @returns {boolean}
   */
  removeAnimation(animationId) {
    return this.animations.delete(animationId);
  }

  /**
   * Sets the active Scene camera.
   *
   * @param {Camera | null} camera
   * @returns {void}
   */
  setCamera(camera) {
    this.camera = camera;
  }
}
