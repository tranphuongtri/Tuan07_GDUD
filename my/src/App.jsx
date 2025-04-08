// import Sidebar from "./components/Sidebar";
// import Header from "./components/header";
// import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';
// import EditUserModal from './components/EditUserModal';
// import AddUserModal from './components/AddUserModal';
import { useState } from 'react';
import Sidebar from "./componentss/Sidebar";
import Header from "./componentss/Header";


function App() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const openEditModal = (user) => {
    setCurrentUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentUser(null);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  return (
    <>
      <BrowserRouter>
        <div className="grid grid-cols-12 min-h-screen bg-gray-50">
          {/* Sidebar */}
          <div className="col-span-2 bg-white shadow-md">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-span-10 flex flex-col">
            <Header />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/integrations" element={<Integrations />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
      {/* <div className="grid grid-cols-12 min-h-screen bg-gray-50">
        Sidebar
        <div className="col-span-2 bg-white shadow-md">
          <Sidebar />
        </div>

        Main Content
        <div className="col-span-10 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <Dashboard />
          </main>
        </div>
      </div> */}
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
