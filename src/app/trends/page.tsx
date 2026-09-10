export default function TrendsAnalysis() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          실시간 검색어 ト렌드
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          현재 네티즌들이 가장 많이 검색하고 있는 이슈 키워드를 실시간으로 확인하세요.
        </p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
        {/* Portal Trends */}
        <section className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", margin: 0 }}>포털 종합 실시간 급상승 (TOP 10)</h2>
            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>1분 전 업데이트</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { rank: 1, keyword: "프로야구 개막전", status: "new" },
              { rank: 2, keyword: "삼성전자 주가", status: "up" },
              { rank: 3, keyword: "넷플릭스 신작", status: "same" },
              { rank: 4, keyword: "아이폰 17 유출", status: "up" },
              { rank: 5, keyword: "날씨 비", status: "down" },
              { rank: 6, keyword: "비트코인 반감기", status: "same" },
              { rank: 7, keyword: "토트넘 손흥민 골", status: "up" },
              { rank: 8, keyword: "주말 갈만한 곳", status: "new" },
              { rank: 9, keyword: "대형마트 휴무일", status: "up" },
              { rank: 10, keyword: "로또 1등 당첨지역", status: "down" },
            ].map((item) => (
              <div key={item.rank} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-glass)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: "700", color: item.rank <= 3 ? "var(--accent-primary)" : "var(--text-secondary)", width: "24px", textAlign: "center" }}>{item.rank}</span>
                  <span style={{ fontWeight: item.rank <= 3 ? "600" : "400" }}>{item.keyword}</span>
                </div>
                <div>
                  {item.status === 'up' && <span style={{ color: "var(--danger)", fontSize: "0.8rem" }}>▲</span>}
                  {item.status === 'down' && <span style={{ color: "var(--accent-primary)", fontSize: "0.8rem" }}>▼</span>}
                  {item.status === 'new' && <span style={{ color: "var(--warning)", fontSize: "0.8rem", fontWeight: "600" }}>NEW</span>}
                  {item.status === 'same' && <span style={{ color: "var(--text-tertiary)", fontSize: "0.8rem" }}>-</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories / News Trends */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <section className="card">
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>카테고리별 인기 검색어</h2>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <button className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", background: "var(--bg-tertiary)" }}>엔터테인먼트</button>
              <button className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>IT/테크</button>
              <button className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>경제</button>
              <button className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>스포츠</button>
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {["아이유 신곡", "어벤져스 개봉일", "무빙 시즌2", "환승연애 갤러리", "에스파 콘서트", "임영웅 티켓팅"].map((tag, idx) => (
                <span key={idx} style={{ 
                  background: "var(--bg-primary)", 
                  padding: "0.5rem 1rem", 
                  borderRadius: "20px", 
                  fontSize: "0.9rem",
                  border: "1px solid var(--border-glass)",
                  color: "var(--accent-secondary)"
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          <section className="card" style={{ flex: 1 }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>트렌드 인사이트</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1rem" }}>
              현재 '프로야구 개막전'과 '삼성전자 주가' 키워드의 검색량이 급격히 상승하고 있습니다. 
              관련된 블로그 포스팅을 작성하면 단기간에 높은 유입을 기대할 수 있습니다.
            </p>
            <button className="btn btn-primary" style={{ width: "100%" }}>이 키워드들로 AI 포스팅 초안 작성하기</button>
          </section>
        </div>
      </div>
    </div>
  );
}
