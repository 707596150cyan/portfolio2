import './About.css';

function About() {
  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: '产品战略',
      description: '擅长制定产品路线图，平衡用户需求与商业目标',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: '用户研究',
      description: '深入用户洞察，通过数据驱动产品决策',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: '跨团队协作',
      description: '高效协调设计、开发、运营等多团队资源',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M12 20V10m0 10l-7-7m7 7V4m0 6l7-7" />
        </svg>
      ),
      title: '数据分析',
      description: '精通数据指标体系建设与增长策略制定',
    },
  ];

  return (
    <section id="about" className="about-section reveal">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">关于我</span>
          <h2 className="section-title">用产品思维创造价值</h2>
          <p className="section-subtitle">
            从用户需求出发，以数据为驱动，打造有温度的产品体验
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              我是一名充满热情的AI产品经理，拥有7年互联网产品经验。深耕阿里巴巴6年，
              从BI到AI，主导了QuickBI、FBI到DataAgent的完整产品演进，专注数据智能与AI产品领域。
            </p>
            <p>
              我相信优秀的产品源于对用户的深刻理解。在工作中，我始终坚持"用户第一"的原则，
              通过持续的用户研究和数据分析，不断优化产品体验，为用户创造真正的价值。
            </p>
            <p>
              除了产品工作，我也热衷于分享和交流。经常在团队内部进行产品方法论培训，
              并在行业会议上分享产品实践经验。
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
