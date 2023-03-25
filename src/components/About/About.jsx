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
          <h1 className="intro-title">Making companies a better place, one app at a time.</h1>
        </div>
        <div className="intro-content-wrapper">
          <p className="intro-content">We think business software should cover complex needs without being complicated. Our mission is to provide software that is intuitive, full-featured, tightly integrated, effortless to upgrade, all while running smoothly for every business, every user.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stats-box">
          <span>
            1700+
          </span>
          <span>
            employees
          </span>
        </div>
        <div className="stats-box">
          <span>
            3500+
          </span>
          <span>
            partners
          </span>
        </div>
        <div className="stats-box">
          <span>
            7 million
          </span>
          <span>
            users
          </span>
        </div>
      </div>

      <div className="content-first">
        <div className="content-first-title">
          <h1>Fits small and large compnaies alike</h1>
        </div>
        <div className="content-first-wrapper">
          <div className="content-first-details">
            <p>Our mission is to provide a range of easy to use business applications that form a complete suite of tools to accompany any business need. We give millions of companies easy access to the software they need to run and expand their business.</p>
            <p>Here at Odoo, we have developed 30 main applications which are regularly upgraded. In addition, our community of more than 1500 active members, have contributed another to 16000+ apps to cover a wide variety of business needs.</p>
            <p>With the "On-premise" offer, Odoo is the most installed business software in the world. It is used by over 5.000.000 users worldwide ranging from startup companies (1 user) to large enterprises (300,000+ users).</p>
          </div>
          <div>
            <img className="contetnt-first-img" src="https://odoocdn.com/openerp_website/static/src/img/2016/about-us/odoo_days_1.jpg" alt="about-us-1" />
          </div>
        </div>
        
      </div>
      <div className="content-second">
        <div className="content-second-title">
          <h1>What makes Odoo different?</h1>
        </div>

        <div className="content-second-wrapper">
          <div>
            <img className="contetnt-second-img" src="https://odoocdn.com/web/image/2227723" alt="about-us-2" />
          </div>
          <div className="content-second-details">
            <p>A smooth and friendly user's experience that has been built to ensure the user seamless adoption.</p>
            <p>Fluidity and full integration cover the needs of even the most complex companies. The flexibility of Odoo is such that apps can be added according to the growth of your company, adding one app at a time as your needs evolve and your customer base grows.</p>
            <p>Thanks to the open source community, Odoo is actively maintained by a large base of developers to meet evolving customer needs and provide new, innovative applications.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;