import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import History from './pages/History';
import IncidentDetails from './pages/IncidentDetails';
import Settings from './pages/Settings';
import Zone from './pages/Zone';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로 접속 시 로그인 창으로 */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/incident-details" element={<IncidentDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/zone" element={<Zone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;