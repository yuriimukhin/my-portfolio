import React, { useEffect, useState } from 'react';
import './Spinner.less';

function Spinner() {
  const [loading, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 1000);

    // setTimeout(() => {
    //   setState(true);
    // }, 4000);

    // setTimeout(() => {
    //   setState(false);
    // }, 6000);
  }, []);

  console.log(loading, 'SATE');

  return (
    <div className={`loader-wrapper ${loading ? 'loading' : 'ready'}`}>
      <span className="lds-dual-ring" />
    </div>
  );
}
export default Spinner;
