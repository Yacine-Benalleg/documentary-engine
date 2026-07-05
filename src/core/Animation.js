/**
 * Represents an animation definition owned by a Scene.
 *
 * Animations are declarative records in Version 0.1. They do not depend on
 * GSAP or any other animation runtime, leaving execution details to future
 * systems.
 *
 * @typedef {object} Animation
 * @property {string} id - Unique animation identifier.
 * @property {string} [name] - Human-readable animation name.
 * @property {string} [targetEntityId] - Entity this animation targets.
 * @property {number} [duration] - Animation duration in seconds.
 * @property {Record<string, unknown>} [metadata] - Project-specific data.
 */

export {};
