import React from "react";
import "./expression.css";
import { MdDelete } from "react-icons/md";
import { clear } from "@testing-library/user-event/dist/clear";
function Expression({
  id,
  title,
  message,
  type,
  step,
  isSelected,
  selectExpression,
  deleteExpression,
  clearSelection,
  isPersonality
}) {
  const handleDelete = (id) => {
    deleteExpression(id);
  };
  const handleClear = (id) => {
    clearSelection(id);
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
          <span>{isPersonality ? type : step}</span>
          <div className="expression-action-wrapper">
            <MdDelete onClick={() => handleDelete(id)} className="delete-btn" />
            <button
              onClick={() => handleClear(id)}
              className="expression-clear-btn"
            >
              Clear
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Expression;
