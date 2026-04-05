import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState('사용자');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('eyeCatchUser'));
    if (savedUser && savedUser.name) {
      setProfileName(savedUser.name);
    }
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="text-slate-900 min-h-screen pb-28 bg-background font-body">
      <header className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-sm flex items-center px-6 py-4">
        <h1 className="text-xl font-black text-blue-900">Eye Catch</h1>
      </header>

      <main className="pt-24 px-6 max-w-4xl mx-auto space-y-8">
        <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-slate-400">person</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold mb-1">{profileName}</h1>
            <p className="text-slate-500 font-medium">안전관리 총괄 책임자</p>
          </div>
          <div>
            <button onClick={handleLogout} className="bg-blue-800 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <span className="material-symbols-outlined">logout</span> 로그아웃
            </button>
          </div>
        </section>

        <h3 className="text-lg font-bold px-2">환경 설정</h3>
        <div className="bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
              <span className="material-symbols-outlined">notifications_active</span>
            </div>
            <div>
              <p className="font-bold text-sm">알림 및 경고</p>
              <p className="text-xs text-slate-500">사고 발생 시 즉각 알림 수신</p>
            </div>
          </div>
          <div className="w-10 h-6 bg-blue-800 rounded-full relative px-1 flex items-center">
            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white shadow-lg z-50 rounded-t-xl">
        <Link to="/main" className="flex flex-col items-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">videocam</span><span className="text-xs">모니터링</span>
        </Link>
        <Link to="/zone" className="flex flex-col items-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">grid_view</span><span className="text-xs">구역</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">warning</span><span className="text-xs">사건 내역</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center bg-blue-50 text-blue-800 rounded-2xl px-5 py-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span><span className="text-xs font-medium">설정</span>
        </Link>
      </nav>
    </div>
  );
}

export default Settings;