import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: '产品能力',
      skills: [
        { name: '需求分析', level: 95 },
        { name: '用户研究', level: 90 },
        { name: '原型设计', level: 88 },
        { name: '数据分析', level: 85 },
        { name: '产品规划', level: 92 },
      ],
    },
    {
      title: '工具技能',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Axure', level: 88 },
        { name: 'Sketch', level: 85 },
        { name: 'SQL', level: 75 },
        { name: 'Python', level: 70 },
      ],
    },
    {
      title: '软技能',
      skills: [
        { name: '跨部门沟通', level: 95 },
        { name: '项目管理', level: 90 },
        { name: '演讲汇报', level: 88 },
        { name: '团队管理', level: 85 },
        { name: '创新思维', level: 92 },
      ],
    },
  ];

  const tools = [
    'Figma', 'Sketch', 'Axure RP', '墨刀', 'Jira', 'Confluence',
    'Notion', '飞书', '钉钉', 'Google Analytics', 'Mixpanel',
    'SQL', 'Python', 'Tableau', 'PowerBI'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">核心能力</span>
          <h2 className="section-title">专业技能与工具</h2>
          <p className="section-subtitle">
            全方位的产品能力体系，助力产品从概念到落地
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="tools-section">
            <h3 className="tools-title">常用工具</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <span key={index} className="tool-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
