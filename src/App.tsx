import './assets/css/App.css'
import { Outlet} from 'react-router-dom'
import BaseLayout from './pages/layouts/BaseLayout'
import { Suspense } from 'react'
import LoadingSpinner from './components/ui/LoadingSpinner'

function App() {

  return (
    <>
      <BaseLayout>
        <Suspense fallback={<LoadingSpinner/>}>
          <Outlet />
        </Suspense>
      </BaseLayout>
    </>
  )
}

export default App
