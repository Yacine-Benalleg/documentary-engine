import System from './System.js'

/**
 * Connects the system update loop to a renderer.
 *
 * RenderSystem owns a renderer instance and forwards scene updates to it. It
 * does not render entities itself, animate, or move the camera.
 */
export default class RenderSystem extends System {
  /**
   * @param {{ render: (scene: unknown) => void }} renderer
   */
  constructor(renderer) {
    super('render')

    this.renderer = renderer
  }

  /**
   * Renders the current scene.
   *
   * @param {unknown} scene
   * @returns {void}
   */
  update(scene) {
    this.renderer.render(scene)
  }
}
