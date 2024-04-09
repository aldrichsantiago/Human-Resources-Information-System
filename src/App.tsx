import Sidebar from "./components/Sidebar"


export default function App() {
  return (
    <div className="relative min-h-screen md:flex" data-dev-hint="container">

      <Sidebar/>
      <main id="content" className="flex-1 p-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
