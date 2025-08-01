import { ActivityBar } from '@/views/activity-bar'
import { Panel } from '@/views/panel'
import { Header } from './views/header'
import { RightSidebar } from './views/right-sidebar'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ActivityBar />
        <Panel />
        <RightSidebar />
      </main>
    </div>
  )
}

export default App
