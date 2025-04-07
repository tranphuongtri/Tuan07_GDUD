// import Sidebar from "./components/Sidebar";
// import Header from "./components/header";
// import Main from "./components/Main";
// import DetailedReport from "./components/Detail";
// import OverviewCard from "./components/OverviewCard"
// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Projects from "./pages/Projects";
// import Teams from "./pages/Teams";
// import Analytics from "./pages/Analytics";
import Sidebar from "./componentss/Sidebar";
import Header from "./componentss/Header";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="col-span-2 bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-10 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <Dashboard />
          </main>
        </div>
      </div>
      {/* <div className="flex h-screen">
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
      </div> */}
      {/* <Main></Main> */}
    </>
  )
}

export default App
