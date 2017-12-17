import React, { Component, PropTypes } from 'react';
import ReactGoogleAdsense from 'react-google-adsense';

const externalJs = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

class TopAds extends Component {
    componentDidMount() {
        ((d, s, id, cb) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
      
            js = d.createElement(s);
            js.id = id;
            js.src = externalJs;
            fjs.parentNode.insertBefore(js, fjs);
            js.onload = cb;
          })(document, 'script', 'google-ads-sdk', () => {
            (adsbygoogle = window.adsbygoogle || []).push({});
          });
    }

    render() {
        return (
            <ins
                className={`adsbygoogle ${this.props.className || ''}`}
                data-ad-client={this.props.client}
                data-ad-slot={this.props.slot}
                data-ad-format={this.props.format}
                style={this.props.style}
            />
        );
    }
}

TopAds.propTypes = {
    client: PropTypes.string.isRequired,
    slot: PropTypes.string.isRequired,
    format: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

TopAds.defaultProps = {
    style: { display: 'block '},
    format: 'auto'
};

export default TopAds;