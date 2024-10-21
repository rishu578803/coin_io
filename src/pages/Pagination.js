import React from "react";

const Pagination = ({
  exchangesPerPage,
  totalExchanges,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalExchanges / exchangesPerPage);

  // Limit the visible page numbers to 4 at a time
  const maxPageDisplay = 4;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageDisplay / 2));
  const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        {/* Previous Button */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link"
            style={{
           

              backgroundColor: "#182368",
              color: "white",
              borderRadius: "20px",
                padding: "8px 34px",
              marginRight:"20px"
            }}
            disabled={currentPage === 1}>
            Prev
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}>
            <button
              onClick={() => paginate(number)}
              className="page-link"
              style={{
                backgroundColor: currentPage === number ? "rgb(24, 35, 104)" : "",
                  color: currentPage === number ? "white" : "inherit",
                borderRadius: currentPage === number ? "8px" : "inherit",  
           
              }}>
              {number}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
                      style={{ 
                      

                      backgroundColor: "#182368",
                      color: "white",
                      borderRadius: "20px",
                          padding: "8px 34px",
                      marginLeft:"20px"
                      }}
                   
            disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

