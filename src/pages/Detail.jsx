import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="detail-container container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={book?.image}
            alt={book?.title}
            className="book-image"
            style={{
              borderRadius: "10px",
              maxHeight: "350px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="book-title">{book?.title}</h1>
          <div className="book-info">
            <Info title="Author" value={book?.author} />
            <Info title="Year" value={book?.year} />
            <Info title="Page Count" value={book?.page} />
            <Info title="Price" value={`${book?.price}€`} />
            <Info title="Description" value={book?.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
