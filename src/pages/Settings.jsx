import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState('사용자');
  
  // 토글 버튼들의 상태 관리 (켜짐/꺼짐)
  const [isAlertOn, setIsAlertOn] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 1. 프로필 이름 가져오기
    const savedUser = JSON.parse(localStorage.getItem('eyeCatchUser'));
    if (savedUser && savedUser.name) {
      setProfileName(savedUser.name);
    }

    // 2. 다크 모드 초기 상태 가져오기 (로컬 스토리지에 저장된 값 확인)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  // 다크 모드 전환 함수
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // 설정 저장
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div className="text-slate-900 dark:text-white min-h-screen pb-28 bg-background dark:bg-slate-900 font-body transition-colors duration-300">
      <header className="fixed top-0 w-full z-50 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none flex items-center px-6 py-4 transition-colors duration-300">
        <h1 className="text-xl font-black text-blue-900 dark:text-blue-100">Eye Catch</h1>
      </header>

      <main className="pt-24 px-6 max-w-4xl mx-auto space-y-8">
        <section className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm transition-colors duration-300">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-slate-500">person</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold mb-1">{profileName}</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">안전관리 총괄 책임자</p>
          </div>
          <div>
            <button onClick={handleLogout} className="bg-blue-800 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md">
              <span className="material-symbols-outlined">logout</span> 로그아웃
            </button>
          </div>
        </section>

        <h3 className="text-lg font-bold px-2 dark:text-slate-200">환경 설정</h3>
        
        <div className="space-y-4">
          {/* 1. 알림 및 경고 토글 */}
          <div 
            onClick={() => setIsAlertOn(!isAlertOn)}
            className="bg-white dark:bg-slate-800 p-5 rounded-2xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isAlertOn ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-700'}`}>
                <span className="material-symbols-outlined">{isAlertOn ? 'notifications_active' : 'notifications_off'}</span>
              </div>
              <div>
                <p className="font-bold text-sm">알림 및 경고</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">사고 발생 시 즉각 알림 수신</p>
              </div>
            </div>
            {/* 스위치 UI */}
            <div className={`w-12 h-7 rounded-full relative flex items-center px-1 transition-colors duration-300 ${isAlertOn ? 'bg-blue-800' : 'bg-slate-300 dark:bg-slate-600'}`}>
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isAlertOn ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
          </div>

          {/* 2. 다크 모드 토글 (새로 추가된 부분) */}
          <div 
            onClick={toggleDarkMode}
            className="bg-white dark:bg-slate-800 p-5 rounded-2xl flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'bg-slate-100 text-slate-500'}`}>
                <span className="material-symbols-outlined">{isDarkMode ? 'dark_mode' : 'light_mode'}</span>
              </div>
              <div>
                <p className="font-bold text-sm">다크 모드</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">어두운 테마로 화면을 봅니다</p>
              </div>
            </div>
            {/* 스위치 UI */}
            <div className={`w-12 h-7 rounded-full relative flex items-center px-1 transition-colors duration-300 ${isDarkMode ? 'bg-indigo-800' : 'bg-slate-300 dark:bg-slate-600'}`}>
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white dark:bg-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-none z-50 rounded-t-xl transition-colors duration-300 border-t border-slate-100 dark:border-slate-700">
        <Link to="/main" className="flex flex-col items-center text-slate-500 dark:text-slate-400 px-5 py-2">
          <span className="material-symbols-outlined">videocam</span><span className="text-xs">모니터링</span>
        </Link>
        <Link to="/zone" className="flex flex-col items-center text-slate-500 dark:text-slate-400 px-5 py-2">
          <span className="material-symbols-outlined">grid_view</span><span className="text-xs">구역</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center text-slate-500 dark:text-slate-400 px-5 py-2">
          <span className="material-symbols-outlined">warning</span><span className="text-xs">사건 내역</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 rounded-2xl px-5 py-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span><span className="text-xs font-medium">설정</span>
        </Link>
      </nav>
    </div>
  );
}

export default Settings;