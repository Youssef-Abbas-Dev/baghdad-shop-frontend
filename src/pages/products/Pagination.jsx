import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="page previous"
        disabled={currentPage === 1}
      >
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {generatedPages.map((page) => (
        <div 
          onClick={() => setCurrentPage(page)} 
          className={currentPage === page ? "page active" : "page"}
          key={page}
          >
          {page}
        </div>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="page next"
        disabled={currentPage === pages}
      >
        التالی
        <i className="bi bi-arrow-left"></i>
      </button>
    </div>
  );
};

export default Pagination;
