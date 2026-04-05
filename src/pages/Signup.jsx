import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    localStorage.setItem('eyeCatchUser', JSON.stringify(userData));
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    navigate('/login');
  };

  return (
    <div className="font-body text-on-surface min-h-screen flex flex-col bg-background">
      <header className="w-full px-6 py-6 flex items-center justify-between z-50">
        <Link to="/login" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios</span>
          <span className="font-medium text-sm">로그인으로 돌아가기</span>
        </Link>
        <div className="text-blue-800 text-xl font-extrabold tracking-tighter font-headline">Eye Catch</div>
      </header>

      <main className="grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center md:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-3">새로운 계정 만들기</h1>
            <p className="text-on-surface-variant leading-relaxed">AI 기반 안전 모니터링 시스템, Eye Catch와 함께 사고 없는 현장을 만들어보세요.</p>
          </div>

          <form onSubmit={handleSignup} className="bg-surface-container-lowest rounded-xl p-8 shadow-lg space-y-6">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase ml-1">이름</label>
              <div className="bg-surface-container-high rounded-lg flex items-center px-4 py-3 focus-within:border-b-2 focus-within:border-primary">
                <span className="material-symbols-outlined text-outline mr-3">person</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent border-none focus:ring-0 w-full" placeholder="홍길동" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase ml-1">이메일 주소</label>
              <div className="bg-surface-container-high rounded-lg flex items-center px-4 py-3 focus-within:border-b-2 focus-within:border-primary">
                <span className="material-symbols-outlined text-outline mr-3">mail</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent border-none focus:ring-0 w-full" placeholder="example@eyecatch.ai" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase ml-1">비밀번호</label>
              <div className="bg-surface-container-high rounded-lg flex items-center px-4 py-3 focus-within:border-b-2 focus-within:border-primary">
                <span className="material-symbols-outlined text-outline mr-3">lock</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent border-none focus:ring-0 w-full" placeholder="••••••••" required />
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full text-center py-4 rounded-xl text-on-primary font-bold text-lg shadow-lg active:scale-95 transition-all" style={{ background: 'linear-gradient(135deg, #003d9b 0%, #0052cc 100%)' }}>
                회원가입 완료
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;