import { ActivityBar } from '@/views/activity-bar'
import { Panel } from '@/views/panel'
import { Header } from './views/header'
import { RightSidebar } from './views/right-sidebar'

function App() {
  return (
    <div className="h-screen overflow-hidden box-border">
      <header>
        <Header />
      </header>
      <main className="flex bg-[var(--bg)] h-[calc(100vh-50px)] border-l border-r border-b border-solid border-[var(--border-color)]">
        <ActivityBar />
        <Panel />
        <RightSidebar />
      </main>
    </div>
  )
}

export default App
