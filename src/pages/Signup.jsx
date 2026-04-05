import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ⏳ 로딩 상태 추가 (가입 버튼 연타 방지)
  const [isLoading, setIsLoading] = useState(false);

  // 🚀 서버로 회원가입 정보 전송 (비동기 함수로 변경)
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 로딩 시작

    try {
      // 백엔드(FastAPI) 엔드포인트로 POST 요청 보내기
      const response = await fetch('https://succeedable-untabled-dewitt.ngrok-free.dev/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 💡 ngrok 무료 버전 사용 시 API 요청이 차단되는 것을 막아주는 마법의 헤더!
          'ngrok-skip-browser-warning': '69420', 
        },
        // FastAPI 서버가 기대하는 데이터 형태로 전송 (필요시 백엔드 변수명에 맞게 수정하세요)
        body: JSON.stringify({ 
          name: name, 
          email: email, 
          password: password 
        }),
      });

      if (response.ok) {
        // 성공 시 (HTTP 상태 코드 200~299)
        alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
        navigate('/login');
      } else {
        // 실패 시 (이메일 중복 등 백엔드에서 에러를 뱉었을 때)
        const errorData = await response.json();
        alert(`가입 실패: ${errorData.detail || '입력하신 정보를 다시 확인해주세요.'}`);
      }
    } catch (error) {
      // 서버가 꺼져있거나 인터넷 연결이 끊겼을 때
      console.error('Signup Error:', error);
      alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
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
              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full text-center py-4 rounded-xl text-on-primary font-bold text-lg shadow-lg transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'}`} 
                style={{ background: 'linear-gradient(135deg, #003d9b 0%, #0052cc 100%)' }}
              >
                {isLoading ? '서버와 통신 중...' : '회원가입 완료'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;