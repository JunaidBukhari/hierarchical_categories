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
          onClick={() => {
            document
              .getElementById(nodeStyle.dragable)!
              .setAttribute('style', 'top:5em; left:0');
            setScale(100);
          }}
        >
          <i className='fa-solid fa-location-arrow'></i>
          <span className={styles.tooltiptext}>Go to center</span>
        </button>
        <button disabled={scale < 35} onClick={() => setScale(scale - 10)}>
          -
        </button>
        <div className={styles.dropdown}>
          <button className={styles.scale}>{scale}%</button>
          <div className={styles.dropdowncontent}>
            {[40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200].map(
              (num) => (
                <span onClick={() => setScale(num)}>
                  {num}% {scale === num && <i className='fa fa-check'></i>}
                </span>
              )
            )}
          </div>
        </div>
        <button disabled={scale > 900} onClick={() => setScale(scale + 10)}>
          +
        </button>
      </span>
    </div>
  );
};

export default Header;
