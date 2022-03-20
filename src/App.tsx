import { useAuth } from '@hooks'
import Loading from '@components/loading'
import Approutes from './Routes'

function App() {
  const { isLoading } = useAuth()
  return isLoading ? (
    <Loading />
  ) : (
    <Approutes />
  )
}

export default App
