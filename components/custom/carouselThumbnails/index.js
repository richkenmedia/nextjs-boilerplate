/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.css';

let globalCssModule;

export function mapToCssModules(className = '', cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className
    .split(' ')
    .map((c) => cssModule[c] || c)
    .join(' ');
}

const CarouselThumbnails = (props) => {
  const { items, activeIndex, cssModule, onClickHandler, className } = props;

  const listClasses = mapToCssModules(
    classNames(className, 'carousel-thumbnails d-flex flex-nowrap'),
    cssModule
  );
  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(
      classNames({ active: activeIndex === idx }),
      cssModule
    );
    return (
      <li
        key={`${item.key || Object.values(item).join('')}`}
        onClick={(e) => {
          e.preventDefault();
          onClickHandler(idx);
        }}
        className={(indicatorClasses, styles.indicatorItems)}
      >
        <img src={item.src} alt={item.altText} width="auto" height="50" />
      </li>
    );
  });

  return <ol className={listClasses}>{indicators}</ol>;
};

CarouselThumbnails.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  cssModule: PropTypes.object,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CarouselThumbnails;
