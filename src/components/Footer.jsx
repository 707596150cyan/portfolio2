import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '导航',
      links: [
        { label: '关于我', href: '#about' },
        { label: '核心能力', href: '#skills' },
        { label: '项目案例', href: '#projects' },
        { label: '工作经历', href: '#experience' },
      ],
    },
    {
      title: '联系',
      links: [
        { label: 'zhangming@example.com', href: 'mailto:zhangming@example.com' },
        { label: '+86 138-0000-0000', href: 'tel:+8613800000000' },
        { label: '北京市朝阳区', href: '#' },
      ],
    },
    {
      title: '社交',
      links: [
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
      ],
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>PM Portfolio</h3>
            <p>
              用产品思维创造价值，以用户体验为核心，
              打造有温度的数字产品。
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map((group, index) => (
              <div key={index} className="footer-group">
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) =>
                          link.href.startsWith('#') && scrollToSection(e, link.href)
                        }
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 秋渭. All rights reserved.</p>
          <p>
            Made with <span className="heart">♥</span> by 产品经理
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
