export const ButtonCategory = ({ categories, filterCategory }) => {
  return (
    <div className="categories">
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
    </div>
  );
};
