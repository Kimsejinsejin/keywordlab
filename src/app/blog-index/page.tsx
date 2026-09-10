export default function BlogIndexAnalysis() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          블로그 지수 진단
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          경쟁 블로그의 최적화 상태와 내 블로그의 현 위치를 확인하세요.
        </p>
      </header>

      <section className="glass-panel" style={{ padding: "1.5rem", marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="블로그 주소(URL) 또는 네이버 ID를 입력하세요" 
            style={{ flex: 1, padding: "1rem", fontSize: "1.1rem" }}
          />
          <button className="btn btn-primary" style={{ padding: "0 2rem", fontSize: "1.1rem" }}>
            지수 진단하기 🚀
          </button>
        </div>
      </section>

      {/* Result UI (Mock) */}
      <div className="card" style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem 1.5rem" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>👑</div>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>이 블로그의 지수는 <span style={{ color: "var(--warning)" }}>[ 최적화 2단계 ]</span> 입니다.</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>상위 5% 이내의 우수한 블로그로 대부분의 키워드에서 상위 노출이 가능합니다.</p>
        
        <div style={{ display: "flex", gap: "2rem", width: "100%", maxWidth: "600px", justifyContent: "space-between", textAlign: "center" }}>
          <div>
            <div style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>일일 방문자 수</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>3,520명</div>
          </div>
          <div>
            <div style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>총 누적 포스팅</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>1,284개</div>
          </div>
          <div>
            <div style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>이웃 수</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>4,502명</div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>최근 작성된 포스팅 분석</h2>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-glass)" }}>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>포스팅 제목</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>작성일</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>추정 키워드</th>
              <th style={{ padding: "1rem 1.5rem", fontWeight: "600" }}>노출 순위 (PC)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border-glass)" }}>
              <td style={{ padding: "1rem 1.5rem" }}>강남역 데이트 코스 추천 BEST 5</td>
              <td style={{ padding: "1rem 1.5rem" }}>2025. 05. 24</td>
              <td style={{ padding: "1rem 1.5rem" }}>강남역 데이트 코스</td>
              <td style={{ padding: "1rem 1.5rem", color: "var(--success)", fontWeight: "600" }}>1위</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border-glass)" }}>
              <td style={{ padding: "1rem 1.5rem" }}>여름 휴가철 필수 준비물 리스트 정리</td>
              <td style={{ padding: "1rem 1.5rem" }}>2025. 05. 21</td>
              <td style={{ padding: "1rem 1.5rem" }}>여름 휴가 필수품</td>
              <td style={{ padding: "1rem 1.5rem", color: "var(--success)", fontWeight: "600" }}>2위</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border-glass)" }}>
              <td style={{ padding: "1rem 1.5rem" }}>가성비 무선 이어폰 리뷰</td>
              <td style={{ padding: "1rem 1.5rem" }}>2025. 05. 18</td>
              <td style={{ padding: "1rem 1.5rem" }}>가성비 무선 이어폰</td>
              <td style={{ padding: "1rem 1.5rem", color: "var(--warning)", fontWeight: "600" }}>5위</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
