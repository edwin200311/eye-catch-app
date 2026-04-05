import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('eyeCatchUser'));
    if (savedUser && savedUser.name) {
      setUserName(savedUser.name);
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    alert('안전하게 로그아웃 되었습니다.');
    navigate('/login');
  };

  return (
    // 최상위 부모 div: 다크모드 전환 시 부드러운 색상 변경(transition) 적용
    <div className="text-on-surface min-h-screen pb-28 bg-background font-body transition-colors duration-300">
      
      {/* 🌙 상단 헤더 (다크모드 시 어두운 남색 배경) */}
      <header className="bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm dark:shadow-none flex justify-between items-center px-6 py-4 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-blue-700 dark:text-blue-400">visibility</span>
          <h1 className="text-xl font-extrabold tracking-tighter text-blue-800 dark:text-blue-100 font-headline">Eye Catch</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-on-surface-variant">{userName} 님</span>
          <button onClick={handleLogout} className="text-xs bg-slate-200 dark:bg-slate-700 px-3 py-1.5 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors font-bold text-slate-700 dark:text-slate-200">로그아웃</button>
        </div>
      </header>

      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <section className="mb-8 mt-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">Live System</p>
              <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface">실시간 모니터링</h2>
            </div>
            {/* 🌙 REC: LIVE 뱃지 (다크모드 시 어두운 배경) */}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-on-surface-variant">REC: LIVE</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            
            {/* CCTV 영상 영역 */}
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-sm group">
              <img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1565626423194-55113d726615?auto=format&fit=crop&q=80" alt="CCTV 화면" />
              <div className="absolute inset-0 p-6 pointer-events-none">
                <div className="border-2 border-primary w-32 h-48 absolute top-1/4 left-1/3 rounded-lg">
                  <span className="absolute -top-7 left-0 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold">탐지 활성화</span>
                </div>
              </div>
            </div>

            {/* 최근 알림 카드 (index.css 테마 변수 영향으로 자동 다크모드 적용됨) */}
            <Link to="/incident-details" className="block bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold font-headline text-on-surface uppercase tracking-wider">최근 알림</h3>
                <span className="text-xs text-on-surface-variant font-medium">방금 전</span>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low p-3 rounded-lg border-l-4 border-error transition-colors duration-300">
                <div className="w-16 h-12 rounded bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 relative">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="알림 이미지" />
                </div>
                <div className="grow">
                  <p className="text-sm font-semibold text-error">북측 창고 무단 접근</p>
                  <p className="text-xs text-on-surface-variant">구역 1: 제한 구역</p>
                </div>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <h3 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">neurology</span> AI 인텔리전스 현황
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-on-surface-variant font-medium">분석 정확도</span>
                    <span className="text-primary font-bold">98.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '98.2%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-slate-700/50 rounded-2xl transition-colors duration-300">
                  <span className="text-xs font-semibold text-blue-800 dark:text-blue-200">활성 감지 구역</span>
                  <span className="text-lg font-headline font-extrabold text-blue-900 dark:text-blue-100">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 🌙 하단 네비게이션 바 (다크모드 시 어두운 남색 배경) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white dark:bg-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-none dark:border-t dark:border-slate-700 z-50 rounded-t-xl transition-colors duration-300">
        <Link to="/main" className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 rounded-2xl px-5 py-2 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
          <span className="text-xs font-medium">모니터링</span>
        </Link>
        <Link to="/zone" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-5 py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-xs font-medium">구역</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-5 py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all">
          <span className="material-symbols-outlined">warning</span>
          <span className="text-xs font-medium">사건 내역</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-5 py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-xs font-medium">설정</span>
        </Link>
      </nav>
    </div>
  );
}

export default Main;