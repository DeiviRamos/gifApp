import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCateogry) => {
    if (categories.includes(newCateogry)) return;

    setCategories([...categories, newCateogry]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
