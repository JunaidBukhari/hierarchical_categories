import React, {  useState } from 'react';
import styles from '../styles/categoriesStyles.module.css';

type categoryType = {
  id: number;
  name: string;
  color: string;
  editing: boolean;
  hasParent: number;
  parentId: number;
};

interface props {
  allcategories: categoryType[];
  category: categoryType;
  saveCategory: Function;
  deleteCategory: Function;
  addCategory: Function;
  editCategory: Function;
}
const Category = ({
  allcategories,
  category,
  saveCategory,
  deleteCategory
,addCategory,editCategory}: props) => {
  const [name, setName] = useState(category.name);
  return (
    <div>
      <div className={styles.category}>
        <div
          id={styles.categoryTitle}
          style={{ backgroundColor: category.color }}
        >
          {category.editing ? (
            <input
              className={styles.input}
              type='text'
              value={name}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
              autoFocus
            />
          ) : (
            category.name
          )}
        </div>

        {category.editing ? (
          <div>
            <i
              onClick={() => name && saveCategory(category, name)}
              id={styles.addCategory}
              style={{ backgroundColor: 'green' }}
              className='fa fa-check'
            ></i>
            <i
              onClick={() => deleteCategory(category)}
              id={styles.deleteCategory}
              style={{ backgroundColor: '#ffc248' }}
              className='fa fa-xmark'
            ></i>
          </div>
        ) : (
          <div>
            <i
              onClick={() => addCategory(category.id, category.hasParent + 1)}
              id={styles.addCategory}
              className='fa fa-plus'
            ></i>
            <i
              onClick={() => editCategory(category)}
              id={styles.addCategory}
              className='fa fa-pen'
            ></i>
            <i
              id={styles.deleteCategory}
              className='fa fa-xmark'
              onClick={() => deleteCategory(category)}
            ></i>
          </div>
        )}
      </div>
      <div className={styles.childCategories}>
        {allcategories
          .filter((c) => c.parentId === category.id)
          .map((cat) => (
            <Category
              key={cat.id}
              category={cat}
              saveCategory={saveCategory}
              allcategories={allcategories}
              deleteCategory={deleteCategory}
              editCategory={editCategory}
              addCategory={addCategory}
            />
          ))}
      </div>
    </div>
  );
};

export default Category;
