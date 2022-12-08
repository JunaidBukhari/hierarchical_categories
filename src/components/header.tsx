import React from 'react';
import styles from '../styles/headerStyles.module.css';
import nodeStyle from '../styles/categoriesStyles.module.css';

interface props {
  scale: number;
  setScale: Function;
}

const Header = ({ scale, setScale }: props) => {
  return (
    <div className={styles.header}>
      <span className={styles.text}>
        Services <span className={styles.badge}>0</span>
      </span>
      <span>
        <button className={styles.listButton}>List View</button>

        <button
          className={styles.tooltip}
          onClick={() =>
            document
              .getElementById(nodeStyle.dragable)!
              .setAttribute('style', 'top:5em; left:0')
          }
        >
          <i className='fa-solid fa-location-arrow'></i>
          <span className={styles.tooltiptext}>Go to center</span>
        </button>
        <button disabled={scale < 35} onClick={() => setScale(scale - 10)}>
          -
        </button>
        <button className={styles.scale}>{scale}</button>
        <button disabled={scale > 900} onClick={() => setScale(scale + 10)}>
          +
        </button>
      </span>
    </div>
  );
};

export default Header;
