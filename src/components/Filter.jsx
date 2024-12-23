import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // Use useSearchParams to access and manage search parameters in the URL.
  // This method is used to access and update parameters in the URL.
  const [searchParams, setSearchParams] = useSearchParams();

  // ! Function to perform the search
  const handleSubmit = (e) => {
    // Prevent page refresh
    e.preventDefault();
    // Access the value in the input when the form is submitted
    const text = e.target[0].value;

    // Set the parameter and value to pass in the URL
    searchParams.set("search", text);

    // Pass a search parameter to the URL
    setSearchParams(searchParams);
  };

  // ! Function to perform sorting
  const handleChange = (e) => {
    // Access the value in the select field
    const text = e.target.value;

    // Pass this accessed value as a parameter in the URL
    searchParams.set("sort", text);

    // Update the URL
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      {/* Select */}
      <div>
        <select onChange={handleChange} className="form-select">
          <option value="">Sort</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter book name..."
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
