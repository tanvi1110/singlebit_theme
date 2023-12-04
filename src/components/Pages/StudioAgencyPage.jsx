import React from 'react';
import HeroStyle3 from '../Hero/HeroStyle3';
// import AboutStyle3 from '../About/AboutStyle3';
import Spacing from '../Spacing';
import ServiceStyle2 from '../Service/ServiceStyle2';
import SectionHeading from '../SectionHeading';
// import Portfolio from '../Portfolio';
// import Button from '../Button';
import Marquee from '../Marquee';
import BrandsStyle2 from '../Brands/BrandsStyle2';
// import TeamSlider from '../Slider/TeamSlider';
// import TestimonialSlider from '../Slider/TestimonialSlider';
import Cta from '../Cta';
// import PostGrid from '../PostGrid';
import { pageTitle } from '../../helpers/PageTitle';
import IconBoxStyle5 from '../IconBox/IconBoxStyle5';
import CardStyle2 from '../Card/CardStyle2';
import Card from '../Card';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
const serviceData = [
  {
    number: '01',
    title: 'WP Development',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_1.jpeg',
    href: '/service/service-details',
  },
  {
    number: '02',
    title: 'Branding Design',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_2.jpeg',
    href: '/service/service-details',
  },
  {
    number: '03',
    title: 'Branding Design',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_3.jpeg',
    href: '/service/service-details',
  },
  {
    number: '04',
    title: 'On Page Optimization',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_4.jpeg',
    href: '/service/service-details',
  },
];
// const portfolioData = [
//   {
//     href: '/portfolio/portfolio-details',
//     imgUrl: '/images/creative-agency/portfolio_1.jpeg',
//     title: 'Awesome colorful artwork',
//     btnText: 'See Project',
//   },
//   {
//     href: '/portfolio/portfolio-details',
//     imgUrl: '/images/creative-agency/portfolio_2.jpeg',
//     title: 'Admin dashboard UI design',
//     btnText: 'See Project',
//   },
//   {
//     href: '/portfolio/portfolio-details',
//     imgUrl: '/images/creative-agency/portfolio_3.jpeg',
//     title: 'Product designing with brand',
//     btnText: 'See Project',
//   },
//   {
//     href: '/portfolio/portfolio-details',
//     imgUrl: '/images/creative-agency/portfolio_4.jpeg',
//     title: 'Kids education website design',
//     btnText: 'See Project',
//   },
// ];
const brandData = [
  {
    logoSrc: '/images/studio-agency/brand_1.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_2.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_3.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_4.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_5.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_6.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_7.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_8.svg',
    logoAlt: 'Partner',
  },
];
const brandDataDark = [
  {
    logoSrc: '/images/studio-agency/brand_1_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_2_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_3_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_4_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_5_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_6_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_7_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_8_dark.svg',
    logoAlt: 'Partner',
  },
];
// const teamData = [
//   {
//     memberImg: '/images/studio-agency/team_1.jpeg',
//     memberName: 'James Berline',
//     memberDesignation: 'React Developer',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_2.jpeg',
//     memberName: 'Bella Zubena',
//     memberDesignation: 'Graphic Designer',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_3.jpeg',
//     memberName: 'Kemnei Alekzend',
//     memberDesignation: 'Digital Marketer',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_4.jpeg',
//     memberName: 'Juliya Jesmine',
//     memberDesignation: 'UX Researcher',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_1.jpeg',
//     memberName: 'James Berline',
//     memberDesignation: 'React Developer',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_2.jpeg',
//     memberName: 'Bella Zubena',
//     memberDesignation: 'Graphic Designer',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_3.jpeg',
//     memberName: 'Kemnei Alekzend',
//     memberDesignation: 'Digital Marketer',
//     href: '/team/team-details',
//   },
//   {
//     memberImg: '/images/studio-agency/team_4.jpeg',
//     memberName: 'Juliya Jesmine',
//     memberDesignation: 'UX Researcher',
//     href: '/team/team-details',
//   },
// ];
// const testimonialData = [
//   {
//     text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
//     avatarName: 'Ansari Patron',
//     avatarDesignation: 'CEO at Delta',
//   },
//   {
//     text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
//     avatarName: 'Jhon Doe',
//     avatarDesignation: 'Manager at Delta',
//   },
//   {
//     text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
//     avatarName: 'Ramatam Coo',
//     avatarDesignation: 'MD at Delta',
//   },
// ];
// const postData = [
//   {
//     date: '07 Mar 2023',
//     title: 'Artistic mind will be great for creation anything',
//     thumbnailSrc: '/images/studio-agency/post_1.jpeg',
//     href: '/blog/blog-details',
//   },
//   {
//     date: '05 Mar 2023',
//     title: 'How to keep fear from ruining your art business with confident',
//     thumbnailSrc: '/images/studio-agency/post_2.jpeg',
//     href: '/blog/blog-details',
//   },
//   {
//     date: '03 Mar 2023',
//     title: 'How to keep fear from ruining your art business with confident',
//     thumbnailSrc: '/images/studio-agency/post_3.jpeg',
//     href: '/blog/blog-details',
//   },
//   {
//     date: '02 Mar 2023',
//     title: 'How to keep fear from ruining your art business with confident',
//     thumbnailSrc: '/images/studio-agency/post_4.jpeg',
//     href: '/blog/blog-details',
//   },
// ];

export default function StudioAgencyPage({ darkMode }) {
  pageTitle('Studio Agency');
  return (
    <>

    {/* Hero section */}
      <HeroStyle3
        title="CRAFTING"
        title2="PRODUCT <br />"
        title3="DESIGN & DEVELOPMENT <br /> FOR SUCCESS"
        scrollingText="Explore the journey of your product launch & growth with"
        scrollingText1="Single"
        scrollingText2="Bit."
        thumbnailSrc={
          darkMode
            ? '/images/studio-agency/hero_bg_dark.jpg'
            : '/images/studio-agency/hero_bg.jpg'
        }
      />

{/* our aim  */}
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Our aim is to improve tech based <br /> solution on business"
            subTitle="Services"
            variant="cs_type_1"
          />
          <Spacing lg="85" md="45" />
          <div className="row g-3">
            <div className="col-lg-6 col-xl-3">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_1.svg"
                title="Chat Bot"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-3">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_2.svg"
                title="Email Client"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-3">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_3.svg"
                title="AI Algorithm"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-3">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_4.svg"
                title="Web Solution"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
          </div>
        </div>
      </section>

{/* our core services */}
      <section>
        <Spacing lg="150" md="80" />
        <section className="cs_primary_bg">
          <Spacing lg="143" md="75" />
          <div className="container">
            <SectionHeading
              title="Our core services"
              subTitle="Services"
              variantColor="cs_white_color"
            />
            <Spacing lg="85" md="45" />
            <ServiceStyle2 variantColor="cs_color_1" data={serviceData} />
          </div>
          <Spacing lg="145" md="80" />
        </section>
      </section>


{/* features */}
      <section className="cs_primary_bg">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeadingStyle2
            title="Imaginative solutions that drive <br />creativity & innovation."
            subTitle="Features"
            btnText="Learn More"
            btnUrl="/about"
          />
          <Spacing lg="85" md="45" />
          <div className="row g-3">
            <div className="col-lg-12">
              <Card
                thumbnailSrc="/images/tech-startup/goal.jpeg"
                title="Revolutionize industries with cutting-edge solutions."
                miniTitle="Our Goal"
              />
            </div>
            <div className="col-lg-6">
              <CardStyle2
                miniTitle="Our Mission"
                title="Empowering businesses through tech innovation."
                subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque."
                variant="cs_mission"
              />
            </div>
            <div className="col-lg-6">
              <CardStyle2
                miniTitle="Our Vision"
                title="Transforming businesses, shaping a smarter world."
                subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque."
                variant="cs_vision"
              />
            </div>
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>


{/* is there specific project */}
      <Cta
        title="Is there a specific project or goal <br/>that you have in mind?"
        btnText="Contact Us"
        btnUrl="/contact"
        bgUrl="/images/creative-agency/cta_bg.jpeg"
        variant="cs_type_1"
      />


{/* trusted brands  */}
      <Spacing lg="135" md="70" />
      <Marquee text="We Create Design - Build App - Website - Branding - SEO" />
      <Spacing lg="84" md="50" />
      <div className="container">
        <BrandsStyle2 data={darkMode ? brandDataDark : brandData} />
      </div>

      {/* our team */}
      {/* <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Meet our experts team behind <br />the zivan agency"
            subTitle="Our Team"
          />
          <Spacing lg="85" md="45" />
        </div>
        <TeamSlider data={teamData} />
      </section> */}

      <Spacing lg="135" md="70" />
    </>
  );
}
