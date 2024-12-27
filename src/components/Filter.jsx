import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Fetch books on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/books") // Make sure this is the correct API endpoint
      .then((response) => {
        setBooks(response.data);
        setFilteredBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books", error);
      });
  }, []);

  // Search function
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();

    // Update URL with search query
    if (text) {
      searchParams.set("search", text);
    } else {
      searchParams.delete("search");
    }

    setSearchParams(searchParams); // Reflect the parameter in the URL
  };

  // Sorting function
  const handleChange = (e) => {
    const text = e.target.value;

    // Update URL with sort query
    if (text) {
      searchParams.set("sort", text);
    } else {
      searchParams.delete("sort");
    }

    setSearchParams(searchParams); // Reflect the parameter in the URL
  };

  // Filter and sort books based on search and sort params
  useEffect(() => {
    let filtered = [...books]; // Make a copy of books to filter and sort

    // Apply search filter
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    const sortQuery = searchParams.get("sort");
    if (sortQuery === "a-z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title)); // A-Z sorting
    } else if (sortQuery === "z-a") {
      filtered.sort((a, b) => b.title.localeCompare(a.title)); // Z-A sorting
    }

    setFilteredBooks(filtered); // Update the filtered books list
  }, [searchParams, books]); // Depend on searchParams and books

  return (
    <div>
      {/* Search and Sort Controls */}
      <div className="d-flex justify-content-between align-items-center my-4 gap-3">
        <div>
          <select
            onChange={handleChange}
            value={searchParams.get("sort") || ""}
            className="form-select"
          >
            <option value="">Sort</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter book name..."
            defaultValue={searchParams.get("search") || ""}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      {/* Book List Display as Cards */}
      <div className="book-list row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <p>
                    <strong>{book.author}</strong>
                  </p>
                  <p>{book.price}€</p>
                  {/* Add more book details or a button to navigate to the detail page */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No books found</div>
        )}
      </div>
    </div>
  );
};

export default Filter;
