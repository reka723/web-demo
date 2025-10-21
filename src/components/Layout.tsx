import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router'

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12 text-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
