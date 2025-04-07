import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Main from "./components/Main";
import DetailedReport from "./components/Detail";
import OverviewCard from "./components/OverviewCard"
function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-50">
          <Header />
          <div className="p-6">
            <h1 className="text-lg font-bold text-gray-700">Overview</h1>
            <div className="flex space-x-6">
              <OverviewCard title="Turnover" value="92,405" change={5.39} />
              <OverviewCard title="Profit" value="32,218" change={5.39} />
            </div>
            <DetailedReport />
          </div>
        </div>
      </div>
      {/* <Main></Main> */}
    </>
  )
}

export default App
