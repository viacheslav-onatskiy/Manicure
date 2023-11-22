import {
  FooterLink,
  FooterLinkList,
  FooterMap,
  FooterNavLink,
  FooterNavList,
  FooterRights,
  FooterWrapper,
  SectionWrapper
} from './styles';

const Footer = () => {
  return (
    <footer>
      <SectionWrapper>
        <FooterWrapper className="container">
          <FooterMap>
            <iframe
              title="google-link-address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.187287362003!2d-122.89611592381398!3d49.25389597279259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867839d8143fd1%3A0xbdf0efdc7768a81a!2s3355%20North%20Rd%20%23265%2C%20Burnaby%2C%20BC%20V3J%207T9!5e0!3m2!1sru!2sca!4v1698983306869!5m2!1sru!2sca"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </FooterMap>
          <FooterLinkList>
            <FooterLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="55"
                height="55"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#2aa4f4"></stop>
                  <stop offset="1" stopColor="#007ad9"></stop>
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                ></path>
              </svg>
            </FooterLink>
            <FooterLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="55"
                height="55"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  fill="white"
                ></path>
              </svg>
            </FooterLink>
          </FooterLinkList>

          <FooterNavList>
            <FooterNavLink to="/">HOME</FooterNavLink>
            <FooterNavLink to="/about">ABOUT</FooterNavLink>
            <FooterNavLink to="/portfolio">PORTFOLIO</FooterNavLink>
            <FooterNavLink to="/reviews">REVIEWS</FooterNavLink>
            <FooterNavLink to="/services">SERVICES</FooterNavLink>
            <FooterNavLink to="/contact">CONTACT</FooterNavLink>
          </FooterNavList>
        </FooterWrapper>
        <FooterRights>
          © 2023 Yana Nails. All Right Reserved. Design by Viacheslav Onatksyi.
        </FooterRights>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
