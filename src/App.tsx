import './assets/css/App.css'
import { Outlet} from 'react-router-dom'
import BaseLayout from './pages/layouts/BaseLayout'

function App() {

  return (
    <>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </>
  )
}

export default App
