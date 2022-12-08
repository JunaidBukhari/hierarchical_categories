import React, { useEffect } from 'react';
import styles from '../styles/categoriesStyles.module.css';
import Categories from './categories';


interface btnProps {
  btnClass: string;
  iconClass: string;
}
const ArrowButton = ({btnClass,iconClass}: btnProps) => {
  return (
    <button className={btnClass}>
      <i className={`fa-solid fa-angle-${iconClass}`}></i>
    </button>
  );
};



interface props {
  scale: number;
}
const dragElement = (element: HTMLElement, dragzone: HTMLElement) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const dragMouseUp = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const dragMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    pos1 = pos3 - event.clientX;
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;

    element.style.top = `${element.offsetTop - pos2}px`;
    element.style.left = `${element.offsetLeft - pos1}px`;
  };

  const dragMouseDown = (event: MouseEvent) => {
    event.preventDefault();

    pos3 = event.clientX;
    pos4 = event.clientY;

    document.onmouseup = dragMouseUp;
    document.onmousemove = dragMouseMove;
  };

  dragzone.onmousedown = dragMouseDown;
};

const CategoryContainer = ({ scale }: props) => {
  useEffect(() => {
    const dragable = document.getElementById(styles.dragable)!;
    const dragzone = document.getElementById(styles.dragzone)!;

    dragElement(dragable, dragzone);
  });

  return (
    <div className={styles.nodesArea}>
      <ArrowButton btnClass={styles.downarrow} iconClass='down' />
      <ArrowButton btnClass={styles.uparrow} iconClass='up' />
      <ArrowButton btnClass={styles.rightarrow} iconClass='right' />
      <ArrowButton btnClass={styles.leftarrow} iconClass='left' />
      <div id={styles.categoriesContainer}>
        <div style={{ zoom: scale / 100 }}>
          <div id={styles.dragable}>
            <header id={styles.dragzone}>
              <span className={styles.initialCategory}>Categories</span>
              <i
                id={styles.addCategory}
                className='fa fa-plus'
                onClick={() => document.getElementById('addFirst')!.click()}
              ></i>
            </header>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
