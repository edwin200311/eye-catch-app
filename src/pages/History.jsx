import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function History() {
  const navigate = useNavigate();

  return (
    // 🌙 최상위 배경 다크모드 동기화 (pb-28로 여백 통일)
    <div className="text-slate-900 dark:text-white min-h-screen pb-28 bg-background dark:bg-slate-900 font-body transition-colors duration-300">
      
      {/* 🌙 상단 헤더 다크모드 동기화 */}
      <header className="bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm dark:shadow-none flex justify-between items-center px-6 py-4 transition-colors duration-300">
        <h1 className="text-xl font-black text-blue-900 dark:text-blue-100 tracking-tighter">Eye Catch</h1>
      </header>

      <main className="pt-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight mb-6 dark:text-white">위험 상황 로그</h2>

        <div className="grid grid-cols-1 gap-6">
          {/* 🌙 카드 컴포넌트 다크모드 적용 */}
          <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative w-full md:w-64 h-40 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="로그 이미지" />
              <div className="absolute top-3 left-3 bg-red-600 px-2 py-1 rounded text-[10px] font-bold text-white uppercase shadow-sm">실시간 보기</div>
            </div>
            <div className="flex flex-col justify-between py-1 grow">
              <div>
                <span className="text-xs font-bold text-tertiary dark:text-red-400 uppercase">구역 침입</span>
                <h3 className="text-xl font-bold dark:text-white mt-1">미승인 출입: 북측 창고</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">2026년 4월 4일 오후 5:45</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={() => navigate('/incident-details')} className="bg-primary dark:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-blue-700 transition-colors">
                  상세 보고서 보기
                </button>
              </div>
            </div>
          </div>
          
          {/* 추가 로그가 있다면 위 카드 블록을 복사해서 여러 개 넣을 수 있습니다 */}
        </div>
      </main>

      {/* 🌙 하단 네비게이션 바 (메인, 설정 화면과 완벽히 일치) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white dark:bg-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-none dark:border-t dark:border-slate-700 z-50 rounded-t-xl transition-colors duration-300">
        <Link to="/main" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-5 py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all">
          <span className="material-symbols-outlined">videocam</span>
          <span className="text-xs font-medium">모니터링</span>
        </Link>
        <Link to="/zone" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-5 py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-xs font-medium">구역</span>
        </Link>
        
        {/* 사건 내역 탭 활성화(Active) 표시 */}
        <Link to="/history" className="flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 rounded-2xl px-5 py-2 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
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

export default History;~