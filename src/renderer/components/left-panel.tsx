import React from 'react';

export default function LeftPanel(props: any) {
  return (
    <div className="full-page-left-side">
      <h1 className="blindmixer">
        <i className="fad fa-cauldron logo" /> blindmixer{' '}
      </h1>

      <h4>
        A <del>cutting edge</del> revolutionary{' '}
      </h4>
      <h3>bitcoin wallet</h3>
      <p className="secondary-text">supporting lightning payments</p>
    </div>
  );
}
