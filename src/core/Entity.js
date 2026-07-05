/**
 * Represents an object that can exist in a Scene.
 *
 * Entities are intentionally renderer-agnostic in Version 0.1. They describe
 * world objects and provide a place for future transform, behavior, or asset
 * references without coupling the core scene model to a rendering engine.
 *
 * @typedef {object} Entity
 * @property {string} id - Unique entity identifier.
 * @property {string} [name] - Human-readable entity name.
 * @property {Record<string, unknown>} [metadata] - Project-specific data.
 */

export {};
