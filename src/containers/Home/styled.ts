import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100vw;
  height: 600px;

  max-width: 1920px;
`;

export const HeaderStyled = styled.div`
  background-color: #000000;

  > .header {
    padding-top: 28px;
    padding-left: 35px;
    padding-right: 35px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }

    > img {
      width: 66px;
      height: 66px;

      cursor: pointer;
    }

    > .btn-list {
      display: flex;
      flex-direction: row;
      align-items: center;

      > .twitter {
        width: 190px;
        height: 39px;
        margin-right: 25px;

        border-radius: 7px;

        cursor: pointer;

        > img {
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      > img {
        width: 46px;
        height: 17px;
      }
    }
  }

  > .title {
    margin-top: 20px;

    padding-left: 35px;
    padding-right: 35px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: #ffffff;

    position: relative;

    @media screen and (max-width: 768px) {
      margin-top: 30px;

      flex-direction: column;
    }

    > .title-1 {
      font-size: 73px;
      line-height: 97px;

      @media screen and (max-width: 768px) {
        font-size: 37px;
        line-height: 49px;
      }
    }

    > .title-2 {
      margin-top: 90px;

      font-size: 65px;
      line-height: 86px;
      text-align: right;

      @media screen and (max-width: 768px) {
        font-size: 37px;
        line-height: 49px;
      }
    }

    > hr {
      position: absolute;
      top: 140px;
      left: 680px;

      margin: 0;
      padding: 0;
      height: 0.01px;
      width: calc(100% - 935px);

      opacity: 0.4;
    }
  }

  > .background {
    padding: 0;
    margin: 70px 0 0 0;
    width: 100%;

    /* position: absolute; */
    /* top: 0; */
    /* bottom: 0; */
    /* left: 50%; */
    /* width: 100%; */
    /* max-width: 880px; */
    /* max-height: 880px; // image is only 880x880 */
    /* transform: translate(-50%, 0); */
    /* border: 20px solid #fff;
    border-radius: 50px;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/125707/sidebar-bg.png)
      no-repeat center center;
    background-size: cover;
    overflow: hidden; */
  }

  > .descript {
    margin-top: 75px;
    padding-left: 35px;
    padding-right: 35px;

    color: #ffffff;

    > .text {
      font-size: 50px;
    }

    > .call {
      margin-top: 75px;

      font-size: 50px;

      position: relative;

      > hr {
        position: absolute;
        top: 8px;
        left: 210px;
        width: calc(100% - 210px);
        opacity: 0.4;
      }
    }

    > .enlightment {
      position: relative;

      margin-top: 20px;
      margin-left: -30px;

      padding-bottom: 900px;

      > span {
        font-size: 285px;
        text-transform: uppercase;
      }

      > img {
        position: absolute;
        top: -155px;
        left: calc(100% - 1370px);
      }
    }
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
  }
  > .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 100%;

    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;

    cursor: pointer;

    > .title {
      padding-left: 25px;
      padding-right: 25px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      font-size: 38px;

      > .triangle {
        width: 0;
        height: 0;
        border: 13px solid transparent;
        border-top: 0;
        border-bottom: 17px solid #ffffff;
        transform: rotate(90deg);
      }

      > .shop {
        color: #707070;
        text-decoration-line: line-through;
      }
    }

    > .experience {
      display: none;
      position: absolute;
      bottom: 50px;
      > .footer {
        margin-left: 25px;
        position: relative;

        font-family: 15px;

        > hr {
          position: absolute;
          /* height: 1px; */
          top: 12px;
          left: 190px;
          width: 100%;
          margin: 0;
          padding: 0;

          opacity: 0.4;
        }
      }
    }

    :hover {
      border: 1px solid #b5b5b5;
      background-color: #ffffff;
      color: #000000;

      > .title {
        .triangle {
          border-bottom: 17px solid #000000;
        }
      }

      > .experience {
        display: block;
      }
    }
  }
  > .picture {
    width: 24vw;
  }
`;

export const SetStyled = styled.div`
  margin-top: 80px;
  padding-left: 20px;

  > .title {
    font-size: 50px;

    position: relative;

    > hr {
      position: absolute;
      top: 67px;
      right: 0px;
      width: calc(100% - 1025px);
    }
  }

  > .body {
    display: flex;
    flex-direction: row;

    > .img {
      margin-top: -50px;
      margin-left: -730px;
      width: 1300px;
    }
    > .list {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      column-gap: 200px;
      justify-content: space-between;

      margin-bottom: 500px;
      /* margin-left: -600px; */

      > .item {
        > img {
          display: block;
        }
        > .text {
          display: flex;
          flex-direction: column;
          > .content {
            max-width: 220px;
          }
        }
      }
    }
  }
`;

export const SettingStyled = styled.div`
  margin-top: -250px;
  padding-left: 35px;
  padding-bottom: 70px;

  display: flex;
  flex-direction: column;
  /* height: 500px; */

  background-color: #000000;
  color: #ffffff;

  position: relative;

  /* z-index: 9999; */

  > .title {
    padding-top: 124px;
    background-color: #000000;
    font-size: 50px;
    position: relative;

    > hr {
      position: absolute;
      top: 135px;
      right: 0;

      width: calc(100% - 1000px);
      opacity: 0.4;
    }
  }

  > .body {
    margin-top: 56px;

    padding-left: 17px;

    display: flex;
    flex-direction: row;

    > .left {
      display: flex;
      flex-direction: column;
      flex: 1;

      > .text-one {
        display: flex;
        flex-direction: row;
        column-gap: 208px;

        font-size: 16px;

        > .text-list {
          width: 217px;
        }
      }

      > .text-two {
        margin-top: 40px;

        font-size: 16px;
      }

      > p {
        margin-top: 40px;

        font-size: 16px;
      }

      > .link {
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
      }
    }

    > .right {
      flex: 1;
      display: flex;

      padding-left: 340px;
      /* height: 200px; */
    }
  }
`;

export const SliderItem = styled.div`
  /* width: 100px; */
  /* height: 240px; */
  /* background-color: red; */
  /* width: 250px !important; */
  /* border: 1px solid red; */
  > img {
    margin-bottom: 11px;
  }
  > .title {
    font-size: 21px;
  }

  > .role {
    font-size: 13px;
  }
`;

export const SliderDiv = styled.div`
  max-height: 510px;
  max-width: 900px;
`;

export const TripStyled = styled.div`
  position: relative;
  > .title {
    position: absolute;
    top: 140px;
    left: 18%;
    font-size: 570px;
    text-align: center;
    z-index: -999;
  }

  > .body {
    z-index: 99;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    height: 100vh;

    overflow-y: auto;
    scroll-behavior: smooth;

    /* padding-top: 368px; */

    > .item {
      height: 100vh !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* padding-top: 368px; */
      /* padding-bottom: 368px; */
      > img {
        width: 487px;
      }
    }
  }
`;

export const PreviewStyled = styled.div`
  display: flex;
  flex-direction: row;

  button {
    position: absolute;
    top: 46px;
    left: 33px;
    color: white;
    font-size: 44px;
    background-color: #000000;

    padding: 0px 15px 0px 15px;
  }

  > .left {
    > .img {
      position: relative;
      margin: 0;
      > img {
        margin: 0;
        width: 809px;
        height: 579px;
      }
    }
    > .background {
      position: relative;
      margin-top: -4px;

      background: #d8d8d8;
      width: 809px;
      height: 311px;
    }
  }

  > .right {
    > .background {
      position: relative;
      width: 1111px;
      height: 319px;
      background: #a0a0a0;
    }

    > .img {
      position: relative;
      > img {
        /* margin-top: -4px; */
        width: 1111px;
        height: 571px;
      }
    }
  }
`;

export const FooterStyled = styled.div`
  height: 224px;
  background: #000000;

  margin-top: -4px;
  padding-left: 80px;
  padding-right: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > .left {
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;

    > img {
      width: 67px;
      height: 67px;
      margin-right: 10px;
    }
  }

  > .right {
    color: white;
    font-size: 16px;
  }
`;
