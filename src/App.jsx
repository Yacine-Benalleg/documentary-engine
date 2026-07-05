import { useMemo } from 'react'
import { Scene } from './core/index.js'
import './App.css'

function App() {
  const scene = useMemo(() => {
    const documentaryScene = new Scene({
      title: 'Documentary Engine',
      version: '0.1',
    })

    documentaryScene.addLayer({
      id: 'base-map',
      name: 'Base Map',
      order: 0,
      visible: true,
    })

    documentaryScene.addEntity({
      id: 'opening-location',
      name: 'Opening Location',
      metadata: {
        type: 'location',
      },
    })

    documentaryScene.setCamera({
      id: 'main-camera',
      name: 'Main Camera',
      position: { x: 0, y: 0, z: 0 },
      zoom: 1,
    })

    return documentaryScene
  }, [])

  return (
    <main className="app-shell">
      <section className="scene-summary" aria-label="Scene system status">
        <p className="eyebrow">Documentary Engine</p>
        <h1>Scene System v0.1</h1>
        <dl>
          <div>
            <dt>Layers</dt>
            <dd>{scene.layers.size}</dd>
          </div>
          <div>
            <dt>Entities</dt>
            <dd>{scene.entities.size}</dd>
          </div>
          <div>
            <dt>Animations</dt>
            <dd>{scene.animations.size}</dd>
          </div>
          <div>
            <dt>Camera</dt>
            <dd>{scene.camera?.name ?? 'None'}</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default App
