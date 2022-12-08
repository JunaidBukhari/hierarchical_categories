import React, {  useState } from 'react';
import styles from '../styles/categoriesStyles.module.css';
import Category from './category';

const Categories = () => {
  type categoriesType = {
    id: number;
    name: string;
    color: string;
    editing: boolean;
    hasParent: number;
    parentId: number;
  };
  const [id, setId] = useState(1);
  const [categories, setCategories] = useState([] as categoriesType[]);

  const addCategory = (parentId = 0, hasParent = 0) => {
    setCategories([
      ...categories,
      {
        id: id,
        name: '',
        color: 'white',
        editing: true,
        hasParent: hasParent,
        parentId: parentId,
      },
    ]);
    setId(id + 1);
  };
  const saveCategory = (category: categoriesType, name: string) => {
    let newcategories = [...categories];
    const index = categories.indexOf(category);
    let newcategory = {
      ...category,
      name,
      color:
        category.hasParent === 0
          ? '#FFAC82'
          : category.hasParent === 1
          ? '#1cbae0'
          : '#b6c5ce',
      editing: false,
    };
    newcategories[index] = newcategory;
    setCategories(newcategories);
  };
  const deleteCategory = (category: categoriesType) => {
    setCategories(categories.filter((c) => c.id !== category.id));
  };

  const editCategory = (category: categoriesType) => {
    let newcategories = [...categories];
    const index = categories.indexOf(category);
    category.editing = true;
    category.color = 'white';
    newcategories[index] = category;
    setCategories(newcategories);
  };

  return (
    <div>
      <button
        style={{ display: 'none' }}
        id='addFirst'
        onClick={() => addCategory()}
      ></button>

      <div className={styles.childCategories}>
        {categories
          .filter((c) => c.hasParent === 0)
          .map((category) => (
            <Category
              key={category.id}
              allcategories={categories}
              category={category}
              saveCategory={saveCategory}
              deleteCategory={deleteCategory}
              editCategory={editCategory}
              addCategory={addCategory}
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;
