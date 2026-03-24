import './Hero.css';
import avatarImg from '../assets/avatar.png';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">你好，我是</span>
          <h1 className="hero-name">秋渭</h1>
          <h2 className="hero-title">资深产品经理</h2>
          <p className="hero-description">
            7年互联网产品经验，深耕数据智能与AI产品领域。从BI到AI，主导QuickBI、FBI到DataAgent的产品演进，
            擅长将复杂数据能力转化为简洁优雅的产品方案，打造集团级AI数据产品标杆。
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              查看项目
            </a>
            <a href="#contact" className="btn btn-secondary">
              联系我
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item" data-tooltip="从2017年至今的产品经理工作经验">
              <span className="stat-number">7</span>
              <span className="stat-label">年产品经验</span>
            </div>
            <div className="stat-item" data-tooltip="成功上线并运营的产品项目数量">
              <span className="stat-number">50+</span>
              <span className="stat-label">成功项目</span>
            </div>
            <div className="stat-item" data-tooltip="累计服务的产品用户数量">
              <span className="stat-number">5万+</span>
              <span className="stat-label">服务用户</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src={avatarImg}
              alt="秋渭 - 产品经理"
              className="hero-avatar"
            />
            <div className="hero-image-decoration"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span>向下滚动</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
