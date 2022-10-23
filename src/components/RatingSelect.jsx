const RatingSelect = ({ select, selected }) => {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            name="rating"
            id={`num${i + 1}`}
            checked={selected === i + 1}
            onChange={handleChange}
            value={i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
