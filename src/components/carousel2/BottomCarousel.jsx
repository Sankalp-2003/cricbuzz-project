import React, { useState } from "react";
import News1 from "../../data/News1.json";
import News2 from "../../data/News2.json";
import News3 from "../../data/News3.json";

function BottomCarousel() {
  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= allNews.length / 3 && page) {
      setPage(selectedPage);
    }
  };

  const allNews = [...News1, ...News2, ...News3];
  return (
    <div className="container2">
      <div className="btm-cards">
        {allNews.slice(page * 3 - 3, page * 3).map((elem) => {
          return (
            <span className="btm-card">
              <div className="btm-top">
                <div className="btm-img">
                  <img
                    src="https://static.cricbuzz.com/a/img/v1/420x235/i1/c563511/shakeel-ton-leads-pakistan-fig.jpg"
                    alt="image"
                  />
                  <h1 className="img-number">{elem.id}</h1>
                </div>
              </div>
              <div className="btm-bottom">
                <div className="btm-content">
                  <h3 className="h3-handleLines handleLines">
                    {elem.headline}
                  </h3>
                  <h4 className="h4-handleLines handleLines">{elem.intro}</h4>
                </div>
              </div>
            </span>
          );
        })}
      </div>
      {allNews.length > 0 && (
        <div className="pagination">
          <span
            className={`${page > 1 ? "" : "pagination-disable"} arrow1`}
            onClick={() => selectPageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(allNews.length / 3)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination-selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`${
              page < allNews.length / 3 ? "" : "pagination-disable"
            } arrow2`}
            onClick={() => selectPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default BottomCarousel;
