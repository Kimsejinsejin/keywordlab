export default function KeywordAnalysis() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          키워드 상세 분석
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          월간 검색량, 경쟁률, CPC 및 트렌드를 한 눈에 확인하세요.
        </p>
      </header>

      {/* Search Bar */}
      <section className="glass-panel" style={{ padding: "1.5rem", marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="키워드를 입력하세요 (예: 강남역 맛집)" 
            style={{ flex: 1, padding: "1rem", fontSize: "1.1rem" }}
            defaultValue="강남역 맛집"
          />
          <button className="btn btn-primary" style={{ padding: "0 2rem", fontSize: "1.1rem" }}>
            분석하기 🔍
          </button>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
        {/* Keyword Overview */}
        <section className="card">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>키워드 개요 (강남역 맛집)</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-glass)" }}>
              <span style={{ color: "var(--text-secondary)" }}>월간 검색량 (PC+Mobile)</span>
              <span style={{ fontWeight: "700" }}>425,100</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-glass)" }}>
              <span style={{ color: "var(--text-secondary)" }}>월간 콘텐츠 발행량</span>
              <span style={{ fontWeight: "700" }}>18,402</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-glass)" }}>
              <span style={{ color: "var(--text-secondary)" }}>꿀통 지수 (경쟁률)</span>
              <span style={{ fontWeight: "700", color: "var(--danger)" }}>매우 높음 (나쁨)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-glass)" }}>
              <span style={{ color: "var(--text-secondary)" }}>예상 클릭당 비용 (CPC)</span>
              <span style={{ fontWeight: "700" }}>₩ 3,450</span>
            </div>
          </div>
        </section>

        {/* Demographics / Devices */}
        <section className="card">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>검색 기기 및 성별 비율</h2>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              <span>모바일 (85%)</span>
              <span>PC (15%)</span>
            </div>
            <div style={{ width: "100%", height: "12px", borderRadius: "6px", display: "flex", overflow: "hidden" }}>
              <div style={{ width: "85%", background: "var(--accent-primary)" }}></div>
              <div style={{ width: "15%", background: "var(--bg-tertiary)" }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              <span>여성 (62%)</span>
              <span>남성 (38%)</span>
            </div>
            <div style={{ width: "100%", height: "12px", borderRadius: "6px", display: "flex", overflow: "hidden" }}>
              <div style={{ width: "62%", background: "var(--accent-secondary)" }}></div>
              <div style={{ width: "38%", background: "var(--bg-tertiary)" }}></div>
            </div>
          </div>
        </section>
      </div>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>연관 키워드 추천</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-glass)" }}>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>연관 키워드</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>월간 검색량</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>콘텐츠 수</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>꿀통 지수</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border-glass)" }}>
              <td style={{ padding: "1rem 1.5rem" }}>강남역 데이트 코스</td>
              <td style={{ padding: "1rem 1.5rem" }}>45,200</td>
              <td style={{ padding: "1rem 1.5rem" }}>1,200</td>
              <td style={{ padding: "1rem 1.5rem", color: "var(--success)" }}>좋음</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border-glass)" }}>
              <td style={{ padding: "1rem 1.5rem" }}>강남역 파스타</td>
              <td style={{ padding: "1rem 1.5rem" }}>28,400</td>
              <td style={{ padding: "1rem 1.5rem" }}>3,400</td>
              <td style={{ padding: "1rem 1.5rem", color: "var(--warning)" }}>보통</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border-glass)" }}>
              <td style={{ padding: "1rem 1.5rem" }}>강남역 조용한 술집</td>
              <td style={{ padding: "1rem 1.5rem" }}>12,100</td>
              <td style={{ padding: "1rem 1.5rem" }}>450</td>
              <td style={{ padding: "1rem 1.5rem", color: "var(--success)" }}>매우 좋음</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
