import { createSignal } from 'solid-js'
import { Button } from 'organic-ui'
import 'organic-ui/dist/index.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <h1>Vite + Solid + Organic-UI</h1>
      <div class="card">
        <Button variant="filled" onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
