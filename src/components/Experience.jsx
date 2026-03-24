import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: '阿里巴巴',
      position: '高级AI产品经理',
      period: '2022 - 至今',
      description:
        '负责AI数据产品从Copilot到ChatBI再到DataAgent的演进，主导集团内最大DataAgent产品的建设与落地。',
      achievements: [
        '主导集团内最大DataAgent产品建设，从0到1完成产品化落地',
        '推动AI产品从Copilot到ChatBI再到DataAgent的完整演进路线',
        '实现AI数据产品的规模化应用，服务集团内多业务线',
      ],
    },
    {
      id: 2,
      company: '阿里巴巴',
      position: '产品经理',
      period: '2021 - 2022',
      description:
        '在阿里数据技术及产品部负责FBI产品，专注数据可视化与商业智能分析平台建设。',
      achievements: [
        '负责FBI产品的功能规划与迭代，提升数据分析师工作效率',
        '优化数据可视化交互体验，降低数据分析门槛',
        '推动BI产品的商业化落地，服务内部多业务团队',
      ],
    },
    {
      id: 3,
      company: '阿里巴巴',
      position: '产品经理',
      period: '2019 - 2021',
      description:
        '在阿里瓴羊负责QuickBI产品，专注商业智能与数据可视化领域，帮助企业实现数据驱动决策。',
      achievements: [
        '参与QuickBI核心功能的产品设计与迭代',
        '优化数据可视化组件，提升用户配置效率',
        '深入理解企业BI场景，沉淀行业解决方案',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">工作经历</span>
          <h2 className="section-title">职业履历</h2>
          <p className="section-subtitle">
            6年阿里产品之路，从BI到AI的深度演进
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker">
                <div className="experience-dot"></div>
                {index !== experiences.length - 1 && (
                  <div className="experience-line"></div>
                )}
              </div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-company">
                    <h3>{exp.company}</h3>
                    <span className="experience-position">{exp.position}</span>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
