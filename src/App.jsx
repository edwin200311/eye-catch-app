import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import History from './pages/History';
import IncidentDetails from './pages/IncidentDetails';
import Settings from './pages/Settings';
import Zone from './pages/Zone';
// 👇 1. 새로 만든 컴포넌트 불러오기
import LiveStream from './pages/LiveStream'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/incident-details" element={<IncidentDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/zone" element={<Zone />} />
        {/* 👇 2. 화면 이동 경로 추가하기 */}
        <Route path="/live-stream" element={<LiveStream />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;