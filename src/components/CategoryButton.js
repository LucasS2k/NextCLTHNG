import { CategoryButtonStyled } from "../styles/CategoryButtonStyles";
export const CategoryButton = ({ categories, filterCategory }) => {
  return (
    <CategoryButtonStyled>
      {categories.map((category) => (
        <button
          type="button"
          className="category"
          onClick={() => filterCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </CategoryButtonStyled>
  );
};
