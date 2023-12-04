import React from 'react';
import parse from 'html-react-parser';

export default function HeroStyle3({ title, title2, title3, scrollingText,scrollingText1, scrollingText2, thumbnailSrc }) {
  return (
    <section
      className="cs_hero cs_style_3 cs_bg_filed cs_center"
      style={{ backgroundImage: `url(${thumbnailSrc})` }}
    >
      <div className="container">
        <div className="cs_hero_text position-relative">
          <h1 className="cs_hero_title cs_fs_68 text-uppercase">
            {parse(title)} <span className="primary_color">{parse(title2)}</span> {parse(title3)}
          </h1>
          <div className="cs_moving_text_wrap">
            <div className="cs_moving_text_in">
              <div className="cs_moving_text">{parse(scrollingText)} <span className="primary_color">{parse(scrollingText1)}</span>{parse(scrollingText2)}</div>
              <div className="cs_moving_text">{parse(scrollingText)} {parse(scrollingText1)} {parse(scrollingText2)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
