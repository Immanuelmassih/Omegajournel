import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
   <div className="col-lg-12">
      <div className="pagination mt--10">
          <ul className="list-inline">
            {pages.map(page => (
              <li
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => onPageChange(page)}>
                <span>
                  {page}
                </span>
              </li>
            ))}
          </ul>
       </div>
    </div>        
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;