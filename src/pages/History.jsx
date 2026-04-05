import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function History() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen pb-24 text-slate-900 font-body">
      <header className="bg-slate-50/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-black text-blue-900 tracking-tighter">Eye Catch</h1>
      </header>

      <main className="pt-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight mb-6">위험 상황 로그</h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-all">
            <div className="relative w-full md:w-64 h-40 bg-slate-200 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="로그 이미지" />
              <div className="absolute top-3 left-3 bg-red-600 px-2 py-1 rounded text-[10px] font-bold text-white uppercase">실시간 보기</div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <span className="text-xs font-bold text-tertiary uppercase">구역 침입</span>
                <h3 className="text-xl font-bold">미승인 출입: 북측 창고</h3>
                <p className="text-sm text-slate-500 mt-1">2026년 4월 4일 오후 5:45</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={() => navigate('/incident-details')} className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md">
                  상세 보고서 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white shadow-lg z-50 rounded-t-xl">
        <Link to="/main" className="flex flex-col items-center justify-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">videocam</span><span className="text-xs">모니터링</span>
        </Link>
        <Link to="/zone" className="flex flex-col items-center justify-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">grid_view</span><span className="text-xs">구역</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center justify-center bg-blue-50 text-blue-800 rounded-2xl px-5 py-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span><span className="text-xs font-medium">사건 내역</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center justify-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">settings</span><span className="text-xs">설정</span>
        </Link>
      </nav>
    </div>
  );
}

export default History;