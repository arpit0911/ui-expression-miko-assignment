import React from "react";
import "./expression.css";
import { MdDelete } from "react-icons/md";
function Expression({
  id,
  title,
  message,
  type,
  isSelected,
  selectExpression,
  deleteExpression,
}) {
  const handleDelete = (id) => {
    deleteExpression(id);
  };
  return (
    <>
      <div
        className={
          isSelected ? "expression-wrapper active" : "expression-wrapper"
        }
      >
        <h4 onClick={() => selectExpression(id)} className="expression-title">
          {title}
        </h4>
        <p>{message}</p>
        <div className="expression-action-wrapper">
          <span>{type}</span>
          <div className="expression-action-wrapper">
            <MdDelete onClick={() => handleDelete(id)} className="delete-btn" />
            <button className="expression-clear-btn">Clear</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Expression;
