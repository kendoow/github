import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentRepo } from "../actions/repos";
import "./card.scss";

const Card = () => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState({ owner: {} });

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
  }, []);

  const navigate = useNavigate();
  return (
   
    <div className="container">
      <button
        onClick={() => navigate("../", { replace: false })}
        className="btn-back"
      >
        BACK
      </button>
      <div className="card">
        <img className="image" src={repo.owner.avatar_url} alt="" />
        <div className="stats">
          <a href = {repo.html_url} className="name">{repo.name}</a>
          <div className="stars">stars: {repo.stargazers_count}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
