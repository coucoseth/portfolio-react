import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ppf1 from '../images/ppf1.png';

class ScreenContainer extends Component {
  state = {
    bulbImageUrl: 'https://img.icons8.com/2C4451/ios-glyphs/40/263238/idea.png',
  };

  render() {
    return (
      <div className="row d-flex w-100 h-100">
        <div className="col-sm-11">
          <div style={this.styles.header} className="mt-5 col-lg-12">
            <div className="row">
              <div className="col-lg-4 ml-4 mb-2" style={{ zIndex: 1 }}>
                <FontAwesomeIcon
                  style={this.styles.leftMenu}
                  icon="align-right"
                  size="2x"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-4 h-100">
                <img src={this.state.bulbImageUrl} alt="bulb" />
              </div>
              <div className="col-lg-7">
                <p style={this.styles.habari}>Habari yako ?</p>
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6">
                    <p style={this.styles.introText} className="mb-0 d-flex">
                      I am Seth ,
                    </p>
                    <p style={this.styles.introText} className="d-flex">
                      a full-stack software developer .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-end w-100 h-100">
            <div className="col-lg-7">
              <img
                src={ppf1}
                alt="face"
                style={this.styles.img}
                className="pl-5 img-fluid"
              />
            </div>
            <div
              style={this.styles.footerText}
              className="col-lg-2 d-flex justify-content-start"
            >
              <p>
                Seth &copy;
                <script>document.write(new Date().getFullYear());</script>{' '}
                ----------
              </p>
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
              <p style={this.styles.footerText}>
                {/* <a href={} style={this.styles.footerText}> */}
                #BLACKLIVESMATTER
                {/* </a> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-1 w-100 h-100">
          <div
            style={this.styles.rightMenu}
            className="col-lg-12 h-50 d-flex flex-column justify-content-center align-items-center"
          >
            <p>
              <FontAwesomeIcon
                style={this.styles.whatsApp}
                icon={['fab', 'whatsapp']}
                size="2x"
              />
            </p>
            <p>
              <FontAwesomeIcon
                style={this.styles.twitter}
                icon={['fab', 'twitter']}
                size="2x"
              />
            </p>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    bg: {
      backgroundColor: '#000',
    },
    header: {
      position: 'absolute',
    },
    habari: {
      fontFamily: 'Roboto',
      fontWeight: 900,
      fontSize: 61,
      // lineHeight: 100,
      textAlign: 'center',
      letterSpacing: 5,
      color: '#263238',
      fontStyle: 'normal',
    },
    introText: {
      fontFamily: 'Kalam',
      fontWeight: 'normal',
      fontSize: 20,
      letterSpacing: 0.5,
      color: '#455A64',
      fontStyle: 'normal',
    },
    img: {
      maxWidth: '90%',
      zIndex: 1,
    },
    footerText: {
      fontWeight: 700,
      color: 'rgba(26, 24, 24, 0.5)',
      backgroundColor: 'transparent',
    },
    rightMenu: {
      backgroundColor: '#263238',
    },
    whatsApp: {
      color: '#388E3C',
    },
    twitter: {
      color: '#0277BD',
    },
    leftMenu: {
      color: '#000'
    }
  };
}

export default ScreenContainer;
