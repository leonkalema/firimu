
import React, { Component, PropTypes } from 'react';
import GoogleAd from './GoogleAd';

// create a style object that is applied
// to the div wrapping the adSense code
// no styling required - just leave style object empty
const style = {
  marginTop: '15px',
  marginBottom: '20px'
};

const TopAds = props => {
  return (
    <GoogleAd 
      client="ca-pub-12121212" 
      slot="12121212" 
      format="auto" 
      wrapperDivStyle={style}
    />
  );
};

export default TopAds;