import { FC, useRef, useEffect } from "react";
import {
  HomeStyled,
  HeaderStyled,
  MenuStyled,
  SetStyled,
  SettingStyled,
  TripStyled,
  SliderDiv,
  SliderItem,
  PreviewStyled,
  FooterStyled,
} from "./styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

import AOS from "aos";
import "aos/dist/aos.css";

const Home: FC = () => {
  const background = useRef<HTMLImageElement>(null);

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HomeStyled data-aos="fade-in">
      <HeaderStyled>
        <div className="header">
          <img src="/img/icons/avatar.svg" alt="" />
          <div className="btn-list">
            <div className="twitter">
              <img className="twitter" src="/img/icons/follow.png" alt="" />
            </div>
            <img src="/img/icons/menu.svg" alt="" />
          </div>
        </div>
        <div className="title">
          <div className="title-1" data-aos="fade-up">
            A state of <br /> mind that is achieved
          </div>
          <div className="title-2" data-aos="fade-up">
            through <br /> the inner self
          </div>
          <hr />
        </div>
        <img
          className="background"
          ref={background}
          src="/img/background.svg"
          alt=""
        />
        <div className="descript">
          <div className="text" data-aos="fade-left">
            spending lives in search of it, a central human experience which{" "}
            <br /> alters all other experiences.
          </div>
          <div className="call">
            <hr />
            <span data-aos="fade-up">We call it</span>
          </div>
          <div className="enlightment" data-aos="fade-up">
            <span>enlightment</span>
            <img data-aos="fade-up" src="/img/picture-1.svg" alt="" />
          </div>
        </div>
      </HeaderStyled>
      <MenuStyled>
        <a className="item" href="#set">
          <div className="title">
            <span>Set</span>
            <div className="triangle"></div>
          </div>
          <div className="experience">
            <div className="footer">
              <span>Expand your experience</span>
              <hr />
            </div>
          </div>
        </a>
        <a className="item" href="#setting">
          <div className="title">
            <span>Setting</span>
            <div className="triangle"></div>
          </div>
          <div className="experience">
            <div className="footer">
              <span>Expand your experience</span>
              <hr />
            </div>
          </div>
        </a>
        <a className="item" href="#trip">
          <div className="title">
            <span>Trip</span>
            <div className="triangle"></div>
          </div>
          <div className="experience">
            <div className="footer">
              <span>Expand your experience</span>
              <hr />
            </div>
          </div>
        </a>
        <div className="item">
          <div className="title">
            <span className="shop">Shop</span>
            <div className="triangle"></div>
          </div>
          <div className="experience">
            <div className="footer">
              <span>Expand your experience</span>
              <hr />
            </div>
          </div>
        </div>
        <div className="picture">
          <img src="/img/menu-picture.svg" alt="" />
        </div>
      </MenuStyled>
      <SetStyled id="set">
        <div data-aos="fade-up" className="title">
          <span>
            "Set" is the mental state a person brings to the <br /> experience,
            like thoughts, mood and expectations
          </span>
          <hr />
        </div>
        <div className="body">
          <div className="img">
            <img src="/img/chair.svg" alt="" />
          </div>
          <div className="list">
            <div className="item">
              <img src="/img/icons/community.svg" alt="" />
              <div className="text" data-aos="fade-up">
                <span className="title">Community</span>
                <span className="content">
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </span>
              </div>
            </div>
            <div className="item">
              <img src="/img/icons/artwork.svg" alt="" />
              <div className="text" data-aos="fade-up">
                <span className="title">Artwork</span>
                <span className="content">
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </span>
              </div>
            </div>
            <div className="item">
              <img src="/img/icons/example.svg" alt="" />
              <div className="text" data-aos="fade-up">
                <span className="title">Example</span>
                <span className="content">
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </span>
              </div>
            </div>
          </div>
        </div>
      </SetStyled>
      <SettingStyled id="setting">
        <div className="title" data-aos="fade-up">
          <span>"Setting" the physical and social environment</span>
          <hr />
        </div>
        <div className="body">
          <div className="left">
            <div className="text-one">
              <div className="text-list" data-aos="fade-up">
                <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
                <p>
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </p>
                <p>
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </p>
              </div>
              <div className="text-list" data-aos="fade-up">
                <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
                <p>
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </p>
                <p>
                  XXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXX
                </p>
              </div>
            </div>
            <div className="text-two" data-aos="fade-up">
              XXXXXXXXXXXXXXXX <br />
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX <br />
              XXXXXXXXXXXXXXXXXXXXXXXXXX <br /> XXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <p>Join the enlightened ones</p>
            <div className="link">
              <BsTwitter size={"24px"} />
              <GrFacebook size={"24px"} />
              <BsInstagram size={"24px"} />
            </div>
          </div>
          <div className="right">
            <SliderDiv>
              <Slider {...settings}>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
                <SliderItem>
                  <img src="/img/team.svg" alt="" />
                  <span className="title">K9NINE</span>
                  <br />
                  <span className="role">C O - F O U N D E R</span>
                </SliderItem>
              </Slider>
            </SliderDiv>
          </div>
        </div>
      </SettingStyled>
      <TripStyled id="trip" className="trip">
        <div className="title" data-aos="fade-up">
          TRIP
        </div>
        <div className="body">
          <div className="item">
            <img src="/img/trip-1.svg" alt="" />
          </div>
          <div className="item">
            <img src="/img/trip-2.svg" alt="" />
          </div>
          <div className="item">
            <img src="/img/trip-3.svg" alt="" />
          </div>
        </div>
      </TripStyled>
      <PreviewStyled>
        <div className="left">
          <div className="img" data-aos="fade-up">
            <button>THE LAB</button>
            <img src="/img/preview-1.svg" alt="" />
          </div>
          <div className="background">
            <button>VIAL</button>
          </div>
        </div>
        <div className="right">
          <div className="background">
            <button>CLOTHING</button>
          </div>
          <div className="img" data-aos="fade-up">
            <button>COMICS</button>
            <img src="/img/preview-2.svg" alt="" />
          </div>
        </div>
      </PreviewStyled>
      <FooterStyled>
        <div className="left">
          <img src="/img/icons/avatar-2.svg" alt="" />
          <span>
            The <br /> Enlightened <br /> ones
          </span>
        </div>
        <div className="right">Join the enlightened ones</div>
      </FooterStyled>
    </HomeStyled>
  );
};

export default Home;
