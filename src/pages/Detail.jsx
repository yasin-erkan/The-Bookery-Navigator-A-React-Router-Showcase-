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

  return (
    <div className="row my-5 p-5 mx-auto container">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img src={book?.image} className="rounded img-fluid shadow" alt="" />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-4">
        <h1>{book?.title}</h1>
        <div className="my-4">
          <Info title="Author" value={book?.author} />
          <Info title="Year" value={book?.year} />
          <Info title="Page Count" value={book?.page} />
          <Info title="Price" value={book?.price} />
          <Info title="Description" value={book?.description} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
