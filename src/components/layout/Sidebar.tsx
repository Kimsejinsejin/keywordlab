import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/" className="logo">
          <span className="logo-icon">🔍</span>
          <span className="logo-text text-gradient">KeywordLab</span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-group">
          <h3 className="nav-group-title">핵심 분석</h3>
          <ul className="nav-list">
            <li>
              <Link href="/keyword" className="nav-item">
                <span className="nav-icon">📊</span>
                <span className="nav-label">키워드 분석</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-index" className="nav-item">
                <span className="nav-icon">📝</span>
                <span className="nav-label">블로그 지수</span>
              </Link>
            </li>
            <li>
              <Link href="/trends" className="nav-item">
                <span className="nav-icon">🔥</span>
                <span className="nav-label">실시간 검색어</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="nav-group">
          <h3 className="nav-group-title">부가 기능</h3>
          <ul className="nav-list">
            <li>
              <Link href="/expansion" className="nav-item">
                <span className="nav-icon">🌿</span>
                <span className="nav-label">연관 키워드 확장</span>
              </Link>
            </li>
            <li>
              <Link href="/ai-assistant" className="nav-item">
                <span className="nav-icon">🤖</span>
                <span className="nav-label">AI 어시스턴트</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="sidebar-footer">
        <button className="btn btn-primary" style={{ width: '100%' }}>
          프리미엄 구독
        </button>
      </div>
    </aside>
  );
}
