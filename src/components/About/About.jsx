import { useState } from "react";
import Nav from "../Nav/Nav";
import './About.css'

function About() {
  return (
    <div>
      <Nav />
      <div className="wrap">

      <div className="intro">
        <div className="intro-title-wrapper">
          <h1 className="intro-title">欢迎来到爱普瑞！我们是一家致力于提供高质量实验室制成化学药剂的公司。</h1>
        </div>
        <div className="intro-content-wrapper">
          <p className="intro-content">我们的药剂严格符合国家相关法规，并已经通过了各种严格的质量和安全测试，以确保产品的可靠性和高效性。爱普瑞非常注重环境保护和可持续发展，致力于研究和生产环保型产品，采用最先进的生产技术，以确保我们的生产过程对环境的影响最小化。</p>
        </div>
      </div>

      <div className="stats">
        <div className="stats-box">
          <span>
            1700+
          </span>
          <span>
            相关科研人员
          </span>
        </div>
        <div className="stats-box">
          <span>
            3500+
          </span>
          <span>
            合作伙伴
          </span>
        </div>
        <div className="stats-box">
          <span>
            7 million
          </span>
          <span>
            顾客
          </span>
        </div>
      </div>

      <div className="content-first">
        <div className="content-first-title">
          <h1>了解爱普瑞</h1>
        </div>
        <div className="content-first-wrapper">
          <div className="content-first-details">
            <p>我们的团队由经验丰富的化学和生物学专家组成，他们致力于研发和生产最高质量的化学药剂。我们的产品范围广泛，包括各种类型的实验室制成药剂，例如生物试剂、医药中间体、合成试剂和高级精细化学品等。</p>
            <p>我们的公司非常注重客户的需求和满意度，我们的销售团队会与您密切合作，为您提供个性化的解决方案和专业的建议。我们的物流系统高效且可靠，能够确保及时送达您需要的产品。</p>
            <p>在爱普瑞，我们不仅提供高质量的化学药剂，还致力于为全球客户提供最好的服务。我们希望与您建立长期的合作伙伴关系，共同推动科学和技术的进步，为人类的健康和福利做出贡献。</p>
          </div>
          <div>
            <img className="contetnt-first-img" src="https://odoocdn.com/openerp_website/static/src/img/2016/about-us/odoo_days_1.jpg" alt="about-us-1" />
          </div>
        </div>
        
      </div>
      <div className="content-second">
        <div className="content-second-title">
          <h1>爱普瑞的不同之处</h1>
        </div>

        <div className="content-second-wrapper">
          <div>
            <img className="contetnt-second-img" src="https://odoocdn.com/web/image/2227723" alt="about-us-2" />
          </div>
          <div className="content-second-details">
            <p><strong>质量保证</strong>：我们的产品经过了各种严格的质量和安全测试，以确保产品的可靠性和高效性。我们的生产流程非常规范，采用最先进的技术和设备，以确保我们的产品质量始终如一。</p>
            <p><strong>研发能力</strong>：我们的团队由经验丰富的化学和生物学专家组成，具有深厚的科研和技术背景，能够快速响应市场需求并开发新产品。我们还与各大研究机构和企业保持密切合作，确保我们始终站在前沿的科技水平。</p>
            <p><strong>个性化服务</strong>：我们注重客户的需求和满意度，为客户提供个性化的解决方案和专业的建议。我们的销售团队会与客户密切合作，确保他们得到最优质的服务和支持。</p>
            <p><strong>社会责任</strong>：我们非常注重环境保护和社会责任。我们的生产流程符合环保要求，我们的团队也积极参与各种社会公益活动和慈善事业，为社会做出贡献。</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;