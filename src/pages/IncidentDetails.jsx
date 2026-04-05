import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function IncidentDetails() {
  const navigate = useNavigate();

  return (
    <div className="text-slate-900 min-h-screen pb-24 bg-background font-body">
      <header className="bg-slate-50/70 backdrop-blur-xl fixed top-0 w-full z-50 flex items-center px-6 py-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-500 hover:text-blue-600 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="text-xl font-black text-blue-900 ml-4">Eye Catch 상세 보고서</span>
      </header>

      <main className="pt-24 max-w-5xl mx-auto px-4 space-y-8">
        <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-lg">
          <img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" alt="위험 상황" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 border-4 border-red-500 rounded-full animate-pulse flex items-center justify-center">
              <span className="material-symbols-outlined text-red-500 text-4xl">warning</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full mb-3">위험 등급: 심각</span>
          <h1 className="text-3xl font-extrabold mb-2">북측 창고 무단 접근</h1>
          <p className="text-slate-500 mb-6">감지 시간: 오후 5:45:12</p>
          
          <h3 className="font-bold text-lg mb-2">상세 내용</h3>
          <p className="text-slate-600 leading-relaxed">
            인공지능이 활성화된 제한 구역 내에서 미승인 인원의 실루엣을 감지했습니다. 자동 경보 시퀀스가 시작되었으며, 보안 팀에 알림이 전송되었습니다.
          </p>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-white shadow-lg z-50 rounded-t-xl">
        <Link to="/main" className="flex flex-col items-center text-slate-500 px-5 py-2">
          <span className="material-symbols-outlined">videocam</span><span className="text-xs">모니터링</span>
        </Link>
        <Link to="/history" className="flex flex-col items-center bg-blue-50 text-blue-800 rounded-2xl px-5 py-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span><span className="text-xs font-medium">목록으로</span>
        </Link>
      </nav>
    </div>
  );
}

export default IncidentDetails;