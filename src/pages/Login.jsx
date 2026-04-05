import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('eyeCatchUser'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert(savedUser.name + '님, 환영합니다!');
      navigate('/main');
    } else {
      alert('이메일 또는 비밀번호가 일치하지 않거나, 가입된 정보가 없습니다.');
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="w-full max-w-md z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-sm mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">child_care</span>
            </div>
            <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-on-surface">Eye Catch</h1>
            <p className="text-on-surface-variant text-sm mt-2 font-medium">우리 아이를 지키는 스마트한 시선</p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-headline text-on-surface mb-1">로그인</h2>
              <p className="text-on-surface-variant text-sm">보호자 계정으로 로그인하여 아이의 상태를 확인하세요.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-1">이메일 주소</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:ring-0 focus:bg-surface-container-highest transition-all" placeholder="name@company.com" required />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">비밀번호</label>
                </div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:ring-0 focus:bg-surface-container-highest transition-all" placeholder="••••••••" required />
              </div>
              
              <div className="pt-2 space-y-4">
                <button type="submit" className="flex items-center justify-center w-full bg-login-gradient text-on-primary font-bold py-4 rounded-xl shadow-md active:scale-95 transition-all" style={{ background: 'linear-gradient(135deg, #003d9b 0%, #0052cc 100%)' }}>
                  로그인
                </button>
                
                <div className="relative flex items-center py-2">
                  <div className="grow border-t border-surface-container-highest"></div>
                  <span className="shrink mx-4 text-xs font-medium text-outline">또는</span>
                  <div className="grow border-t border-surface-container-highest"></div>
                </div>
                
                <Link to="/signup" className="flex items-center justify-center w-full bg-transparent border border-outline-variant text-on-surface font-semibold py-3.5 rounded-xl hover:bg-surface-container-low transition-all">
                  회원가입 하기
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;