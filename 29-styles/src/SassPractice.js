import React from 'react';
import './styles/SassPractice1.scss';
import './styles/SassPractice2.scss';

export default function SassPractice() {
  return (
    <>
      {/* 실습1 */}
      {/* <div className="container worm">
        <div class="body body1">
          <div class="eye-white">
            <div class="eye-black"></div>
          </div>
        </div>
        <div class="body body2"></div>
        <div class="body body3"></div>
        <div class="body body4"></div>
        <div class="body body5"></div>
        <div class="body body6"></div>
      </div> */}

      {/* 실습2 */}
      <div className="container mixin">
        <div className="circle pink"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
    </>
  );
}
