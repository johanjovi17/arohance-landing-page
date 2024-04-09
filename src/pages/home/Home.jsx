import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <div class="hero-container">
        <Navbar />

        {/* hero content  */}
        <div class="hero-content">
          <div class="small-title">
            WEB DEVELOPMENT, ADVERTISING & MARKETING AGENCY
          </div>
          <div class="title-big">
            We help <br />
            brands Grow Beautifully
          </div>
          <a href="" class="hero-btn">
            GET STARTED NOW
          </a>
        </div>
      </div>

      {/* <!-- grid section --> */}
      <div class="grid-container">
        <div class="grid-content">
          <div class="grid-box-section row1">
            <div class="grid-box">
              <h4 class="grid-title">Design</h4>
              <span class="grid-box-num">01</span>
              <ul class="grid-list">
                <li class="grid-list-item">Logo Design</li>
                <li class="grid-list-item">Website UI/UX Design</li>
                <li class="grid-list-item">Responsive Design</li>
                <li class="grid-list-item">Landing Page Design</li>
              </ul>
              <a href="" class="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div class="grid-box">
              <h4 class="grid-title">Development</h4>
              <span class="grid-box-num">02</span>
              <ul class="grid-list">
                <li class="grid-list-item">Web Hosting</li>
                <li class="grid-list-item">Domain setup custom</li>
                <li class="grid-list-item">Web Applications SEO</li>
                <li class="grid-list-item">Integration Website</li>
                <li class="grid-list-item">Maintenance</li>
              </ul>
              <a href="" class="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div class="grid-box">
              <h4 class="grid-title">Marketing</h4>
              <span class="grid-box-num">03</span>
              <ul class="grid-list">
                <li class="grid-list-item">Digital Marketing</li>
                <li class="grid-list-item">Content Creation</li>
                <li class="grid-list-item">Analytics and Data</li>
                <li class="grid-list-item">Analysis</li>
                <li class="grid-list-item">Influencer Marketing</li>
              </ul>
              <a href="" class="grid-read-more-btn">
                READ MORE
              </a>
            </div>
          </div>
          <div class="grid-box-section row2">
            <div class="grid-box">
              <h4 class="grid-title">Social Media</h4>
              <span class="grid-box-num">04</span>
              <ul class="grid-list">
                <li class="grid-list-item">Social Media Strategy</li>
                <li class="grid-list-item">Paid Social Media</li>
                <li class="grid-list-item">Advertising</li>
                <li class="grid-list-item">Social Media Analytics</li>
                <li class="grid-list-item">Community</li>
                <li class="grid-list-item">Management</li>
              </ul>
              <a href="" class="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div class="grid-box">
              <h4 class="grid-title">NFC</h4>
              <span class="grid-box-num">05</span>
              <ul class="grid-list">
                <li class="grid-list-item">NFC PVC business cards</li>
                <li class="grid-list-item">NFC Metal Business cards</li>
                <li class="grid-list-item">NFC Inventory management</li>
                <li class="grid-list-item">Entry access systems</li>
              </ul>
              <a href="" class="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div class="grid-box">
              <h4 class="grid-title">Help and Support</h4>
              <span class="grid-box-num">06</span>
              <ul class="grid-list">
                <li class="grid-list-item">24/7 Assistance</li>
                <li class="grid-list-item">Technical Support</li>
                <li class="grid-list-item">Guidance and</li>
                <li class="grid-list-item">Information</li>
                <li class="grid-list-item">Problem Resolution</li>
              </ul>
              <a href="" class="grid-read-more-btn">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- web solutions section --> */}
      <div class="web-solutions-container">
        <h2 class="web-solutions-heading">Web Solutions</h2>
        <h4 class="web-solutions-mini-title">
          We create your digital presence and increase your visibility with our
          web development solutions.
        </h4>
        <div class="web-solutions-row">
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">Search Engine Optimization</h3>
            <p class="web-solution-box-description">
              With effective SEO practices, we increase the ranking of your
              website and increase site traffic and visibility.
            </p>
          </div>
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">E-Commerce Solutions</h3>
            <p class="web-solution-box-description">
              As Shopify experts, we enhance your e-commerce store with tailored
              solutions and seamless transitions.
            </p>
          </div>
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">Digital Media Planning</h3>
            <p class="web-solution-box-description">
              We create the media strategy for your brand on digital channels
              with advertising technologies suitable for your marketing strategy
              and target audience.
            </p>
          </div>
        </div>
        <div class="web-solutions-row">
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">Content Marketing</h3>
            <p class="web-solution-box-description">
              We deliver your products and services to your potential customers
              both domestically and abroad with content marketing, which is a
              new generation digital communication tool.
            </p>
          </div>
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">Web Development</h3>
            <p class="web-solution-box-description">
              We develop software solutions tailored to the specific needs of
              your business, making your processes more efficient.
            </p>
          </div>
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">Performance Marketing</h3>
            <p class="web-solution-box-description">
              With performance marketing solutions that suit your marketing
              strategy, we increase your online presence in the digital world
              and achieve real results for your business.
            </p>
          </div>
          <div class="web-solutions-box">
            <h3 class="web-solution-box-title">Influencer Marketing</h3>
            <p class="web-solution-box-description">
              Utilize influencer marketing to amplify your brand's reach.
              Connect with authentic creators to engage your audience and drive
              conversions, maximizing your marketing impact.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Split content section --> */}
      <div class="split-content-container">
        <div class="split-content-central-content">
          <div class="split-content-left-content">
            <h1 class="split-content-heading">
              We are an Website Development Advertising & Marketing firm .
            </h1>
            <p class="split-content-text">
              From crafting strategic plans to managing your online buzz,
              Digital Marker empowers businesses to thrive in the digital age.
              We’ll optimize your content, SEO, and social media, propelling
              your brand to success with data-driven campaigns and creative
              flair. Join us and watch your digital presence soar!
            </p>
            <br />
            <br />
            <p class="split-content-text">
              We’re your one-stop Solutions for comprehensive marketing, from
              crafting data-driven strategies to managing engaging social media
              campaigns. Our SEO expertise bolsters your online presence, while
              creative content grabs attention and converts leads. Partner with
              Us and unlock the privilege of a thriving digital future.
            </p>
          </div>
          <div class="split-content-right-content">
            <img
              src="/assets/split-screen-pic.jpg"
              alt="split-screen-pic"
              class="split-screen-pic"
            />
          </div>
        </div>
      </div>
      {/* <!-- reviews section --> */}
      <div class="review-container">
        <div class="review-container-central-content">
          <h2 class="review-title">Our Clients Review</h2>
          <span class="review-mini-title">
            Don’t settle for mediocrity. Choose Bytedepth and watch your brand
            soar!
          </span>
          <span class="review-section-line"></span>
          <div class="review-row">
            <div class="review-box">
              <p class="review-text">
                Exceptional service! This company goes above and beyond to meet
                their customers’ needs. I couldn’t be happier with the results.
              </p>
              <div class="review-person-info">
                <img
                  src="/assets/review-pic-1.jpg"
                  alt=""
                  class="review-person-pic"
                />
                <span class="review-person-name">Kamlesh</span>
              </div>
            </div>
            <div class="review-box">
              <p class="review-text">
                Outstanding quality and professionalism. I’ve been a loyal
                customer for 3 months and have never been disappointed.
              </p>
              <div class="review-person-info">
                <img
                  src="/assets/review-pic-2.jpg"
                  alt=""
                  class="review-person-pic"
                />
                <span class="review-person-name">Sourav</span>
              </div>
            </div>
          </div>
          <span class="review-section-line"></span>
          <div class="review-row">
            <div class="review-box">
              <p class="review-text">
                Impressive attention to detail and excellent communication.
                Working with this team has been a pleasure.
              </p>
              <div class="review-person-info">
                <img
                  src="/assets/review-pic-3.jpg"
                  alt=""
                  class="review-person-pic"
                />
                <span class="review-person-name">Tahir</span>
              </div>
            </div>
            <div class="review-box">
              <p class="review-text">
                Reliable and trustworthy. I highly recommend this business to
                anyone looking for top-notch marketing services.
              </p>
              <div class="review-person-info">
                <img
                  src="/assets/review-pic-4.jpg"
                  alt=""
                  class="review-person-pic"
                />
                <span class="review-person-name">Rajiv</span>
              </div>
            </div>
          </div>
          <span class="review-section-line"></span>
        </div>
        <div class="review-bottom-row">
          <div class="review-bottom-left-content">
            <h2 class="review-bottom-heading">
              Would you like to start a project with us?
            </h2>
            <p class="review-bottom-desc">
              Embark on a journey of digital excellence! Ready to turn your
              ideas into reality? Let's collaborate and launch a successful
              project together.
            </p>
          </div>
          <div class="review-bottom-right-content">
            <a href="#" class="review-bottom-btn">
              START A PROJECT
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Incremental counter section --> */}
      <div class="incremental-counter-container">
        <div class="incremental-counter-central-content">
          <div class="incremental-counter-box">
            <span class="num" data-val="150">
              000
            </span>
            <p class="incremental-counter-title">PROJECTS</p>
          </div>
          <div class="incremental-counter-box">
            <span class="num" data-val="130">
              000
            </span>
            <p class="incremental-counter-title">HAPPY CLIENTS</p>
          </div>
          <div class="incremental-counter-box">
            <span class="num" data-val="15">
              000
            </span>
            <p class="incremental-counter-title">TEAM MEMBERS</p>
          </div>
        </div>
      </div>
      {/* <!-- image grid section --> */}
      {/* <div class="image-grid-container">
        <div class="img-grid-row">
          <div class="img-grid-box">
            <img src="img-grid-1.jpg" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Bellini Special</h3>
              <span class="img-grid-mini-title">DIGITAL ADVERTISING</span>
            </div>
          </div>
          <div class="img-grid-box">
            <img src="img-grid-2.webp" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Grateful INC</h3>
              <span class="img-grid-mini-title">RESEARCH & PLANNING</span>
            </div>
          </div>
          <div class="img-grid-box">
            <img src="img-grid-3.jpeg" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Grateful INC</h3>
              <span class="img-grid-mini-title">RESEARCH & PLANNING</span>
            </div>
          </div>
          <div class="img-grid-box">
            <img src="img-grid-4.jpg" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Grateful INC</h3>
              <span class="img-grid-mini-title">RESEARCH & PLANNING</span>
            </div>
          </div>
        </div>
        <div class="img-grid-row">
          <div class="img-grid-box">
            <img src="img-grid-2.webp" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Grateful INC</h3>
              <span class="img-grid-mini-title">RESEARCH & PLANNING</span>
            </div>
          </div>
          <div class="img-grid-box">
            <img src="img-grid-2.webp" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Grateful INC</h3>
              <span class="img-grid-mini-title">RESEARCH & PLANNING</span>
            </div>
          </div>
          <div class="img-grid-box">
            <img src="img-grid-2.webp" alt="" class="img-grid-img" />
            <div class="img-grid-title-container">
              <h3 class="img-grid-title">Grateful INC</h3>
              <span class="img-grid-mini-title">RESEARCH & PLANNING</span>
            </div>
          </div>
          <div class="img-grid-box">
            <div class="img-grid-last-box">
              <h1 class="img-grid-title-last-box-title">
                Next Project Will Be Yours
              </h1>
              <a href="" class="img-grid-btn">
                GET STARTED NOW
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- index page footer --> */}
      <Footer />
    </>
  );
}

export default Home;
