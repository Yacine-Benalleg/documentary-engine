/**
 * Represents the Scene camera state.
 *
 * The camera stores viewpoint data for systems that may later render or
 * inspect the Scene. It does not perform projection, rendering, or viewport
 * management in Version 0.1.
 *
 * @typedef {object} CameraPosition
 * @property {number} x - Horizontal camera position.
 * @property {number} y - Vertical camera position.
 * @property {number} [z] - Optional depth camera position.
 *
 * @typedef {object} Camera
 * @property {string} id - Unique camera identifier.
 * @property {string} [name] - Human-readable camera name.
 * @property {CameraPosition} [position] - Camera position in world space.
 * @property {number} [zoom] - Camera zoom level.
 * @property {Record<string, unknown>} [metadata] - Project-specific data.
 */

export {};
