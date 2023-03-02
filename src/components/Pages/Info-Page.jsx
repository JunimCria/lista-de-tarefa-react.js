import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button";
import "./Info-Page.css";

const InfoPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackPageClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="info-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a
          dignissimos est impedit consectetur error praesentium commodi at
          tempore itaque doloremque saepe ipsum rem vitae, facere ipsa dolores
          eveniet nihil.
        </p>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackPageClick}> Voltar </Button>
      </div>
    </>
  );
};

export default InfoPage;
