function PaginationBar({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-wrap mt-5">
      <nav aria-label="分页导航">
        <ul className="pagination justify-content-center flex-wrap gap-2 mb-0">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              type="button"
              className="page-link custom-page-link"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              上一页
            </button>
          </li>

          {pages.map((page) => (
            <li key={page} className="page-item">
              <button
                type="button"
                className={`page-link custom-page-link ${
                  currentPage === page ? 'active' : ''
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              type="button"
              className="page-link custom-page-link"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              下一页
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationBar;