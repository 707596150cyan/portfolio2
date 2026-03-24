import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: '全部' },
    { id: 'ai', label: 'AI产品' },
    { id: 'bi', label: 'BI产品' },
  ];

  const projects = [
    {
      id: 1,
      title: 'DataAgent',
      category: 'ai',
      description:
        '集团内最大的AI数据智能助手产品，通过自然语言对话实现数据分析、报表生成、智能洞察，从0到1打造集团级AI数据产品标杆。',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['AI', 'DataAgent', 'LLM'],
      metrics: [
        { label: '服务用户', value: '5万+' },
        { label: '日均查询', value: '10万+' },
        { label: '准确率', value: '95%' },
      ],
      link: '#',
    },
    {
      id: 2,
      title: 'ChatBI',
      category: 'ai',
      description:
        'AI驱动的对话式商业智能平台，用户可通过自然语言进行数据查询和分析，大幅降低数据分析门槛，实现AI与BI的深度融合。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['AI', 'ChatBI', '对话式分析'],
      metrics: [
        { label: '覆盖业务线', value: '20+' },
        { label: '查询效率', value: '提升10倍' },
        { label: '用户满意度', value: '90%' },
      ],
      link: '#',
    },
    {
      id: 3,
      title: 'Copilot 数据助手',
      category: 'ai',
      description:
        'AI Copilot产品形态的数据智能助手，通过AI辅助用户完成数据探索、异常发现、趋势预测等分析任务，开启AI+数据的新范式。',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tags: ['AI', 'Copilot', '智能助手'],
      metrics: [
        { label: '功能覆盖', value: '15+' },
        { label: '效率提升', value: '60%' },
        { label: ' adoption', value: '80%' },
      ],
      link: '#',
    },
    {
      id: 4,
      title: 'FBI',
      category: 'bi',
      description:
        '阿里巴巴数据技术及产品部的核心BI产品，专注于数据可视化与商业智能分析，为数据分析师和业务人员提供强大的分析工具。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['BI', '数据可视化', '分析平台'],
      metrics: [
        { label: '服务团队', value: '100+' },
        { label: '报表数量', value: '10万+' },
        { label: '日活用户', value: '2万+' },
      ],
      link: '#',
    },
    {
      id: 5,
      title: 'QuickBI',
      category: 'bi',
      description:
        '阿里瓴羊旗下的商业智能产品，帮助企业快速搭建数据可视化分析平台，实现数据驱动决策，服务众多企业客户。',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['BI', 'SaaS', '企业级'],
      metrics: [
        { label: '企业客户', value: '5000+' },
        { label: '覆盖行业', value: '30+' },
        { label: '用户好评', value: '4.8/5' },
      ],
      link: '#',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">项目案例</span>
          <h2 className="section-title">精选产品项目</h2>
          <p className="section-subtitle">
            从BI到AI的产品演进，专注数据智能与AI产品领域
          </p>
        </div>

        <div className="projects-filter">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    查看详情
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-metrics">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="metric-item">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
