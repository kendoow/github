import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../reducers/reposReducer";
import { createPages } from "../../utils/pagesCreator";
import { getRepos } from "../actions/repos";
import "./main.scss";
import Repo from "./repo/Repo";
const Main = () => {
  const dispatch = useDispatch();
  // массив с items который мы отрисовываем, данные в него попадают из 
  const repos = useSelector((state) => state.repos.items);
  const isFethcing = useSelector((state) => state.repos.isFetching);
  // задается числом прям тут
  const currentPage = useSelector((state) => state.repos.currentPage);
  // totalCount берется из repos.js с сервера во время фетчинга и помещаетс я в переменную
  const totalCount = useSelector((state) => state.repos.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const isFetchError = useSelector((state) => state.repos.isFetchError);
  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  const searchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue));
  };

  // useEffect(() => {
  //   if (isFetchError) {
  //     return navigate("/error");
  //   }
  // }, [isFetchError]);

  return (
    <div>
      {isFetchError && (
        <div class="alert alert-danger" role="alert">
          Произошла ошибка, пожалуйста обновите страницу!
        </div>
      )}
      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="search-input"
        />
        <button onClick={() => searchHandler()} className="search-btn">
          Search
        </button>
      </div>
      {isFethcing === false ? (
        repos.map((repo, index) => <Repo key={index} repo={repo} />)
      ) : (
        <div className="fetching"></div>
      )}

      <div className="pages">
        {pages.map((page, index) => (
          <span
            key={index}
            className={currentPage === page ? "current-page" : "page"}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
