/**
 * Represents a logical grouping of entities in a Scene.
 *
 * Layers define organization and ordering only. They do not render anything
 * directly, which keeps the scene architecture separate from presentation.
 *
 * @typedef {object} Layer
 * @property {string} id - Unique layer identifier.
 * @property {string} [name] - Human-readable layer name.
 * @property {number} [order] - Optional ordering value.
 * @property {boolean} [visible] - Whether the layer should be considered visible.
 * @property {Record<string, unknown>} [metadata] - Project-specific data.
 */

export {};
