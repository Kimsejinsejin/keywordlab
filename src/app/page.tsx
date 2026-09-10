import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          대시보드
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          키워드 인텔리전스 개요 및 빠른 시작
        </p>
      </header>

      {/* Quick Search Section */}
      <section className="glass-panel" style={{ padding: "2rem", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>빠른 키워드 분석</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="분석할 키워드를 입력하세요 (예: 강남역 맛집)" 
            style={{ flex: 1, padding: "1rem", fontSize: "1.1rem" }}
          />
          <button className="btn btn-primary" style={{ padding: "0 2rem", fontSize: "1.1rem" }}>
            분석하기 🔍
          </button>
        </div>
      </section>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
        <div className="card">
          <div style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>이번 달 검색량</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--accent-primary)" }}>12,450</div>
          <div style={{ color: "var(--success)", fontSize: "0.9rem", marginTop: "0.5rem" }}>↑ 12% 전월 대비</div>
        </div>
        
        <div className="card">
          <div style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>발견한 꿀통 키워드</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--accent-secondary)" }}>86</div>
          <div style={{ color: "var(--success)", fontSize: "0.9rem", marginTop: "0.5rem" }}>상위 노출 확률 높음</div>
        </div>
        
        <div className="card">
          <div style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>내 블로그 지수</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "var(--warning)" }}>준최적화 3</div>
          <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>지난 주 업데이트 됨</div>
        </div>
      </div>

      {/* Feature Navigation */}
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>주요 기능 둘러보기</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        <Link href="/keyword" style={{ textDecoration: "none" }}>
          <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>📊</div>
            <h3 style={{ fontSize: "1.25rem" }}>키워드 상세 분석</h3>
            <p style={{ color: "var(--text-secondary)", flex: 1 }}>월간 검색량, 문서 수, 경쟁률, CPC 및 연령/성별 트렌드를 완벽하게 분석합니다.</p>
            <span style={{ color: "var(--accent-primary)", fontWeight: "600", fontSize: "0.9rem" }}>바로가기 →</span>
          </div>
        </Link>

        <Link href="/blog-index" style={{ textDecoration: "none" }}>
          <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>📝</div>
            <h3 style={{ fontSize: "1.25rem" }}>블로그 지수 진단</h3>
            <p style={{ color: "var(--text-secondary)", flex: 1 }}>경쟁 블로그의 최적화 상태와 지수를 확인하고 내 블로그의 현 위치를 파악하세요.</p>
            <span style={{ color: "var(--accent-primary)", fontWeight: "600", fontSize: "0.9rem" }}>바로가기 →</span>
          </div>
        </Link>

        <Link href="/trends" style={{ textDecoration: "none" }}>
          <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ fontSize: "2rem" }}>🔥</div>
            <h3 style={{ fontSize: "1.25rem" }}>실시간 급상승 검색어</h3>
            <p style={{ color: "var(--text-secondary)", flex: 1 }}>지금 뜨고 있는 트렌디한 키워드를 확인하고 먼저 콘텐츠를 선점하세요.</p>
            <span style={{ color: "var(--accent-primary)", fontWeight: "600", fontSize: "0.9rem" }}>바로가기 →</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
