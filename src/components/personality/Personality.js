import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import "./personality.css";
function Personality({ title, isActive }) {
  return (
    <>
      <div
        className={
          isActive
            ? "personality-wrapper"
            : "personality-wrapper inActive-wrapper"
        }
      >
        <div
          className={
            isActive
              ? "personality-wrapper-header"
              : "personality-wrapper-header"
          }
        >
          <button disabled={!isActive}>
            {isActive ? (
              <FaRegDotCircle className="selected-icon" />
            ) : (
              <BsCircle className="selected-icon" />
            )}
          </button>
          <h5>{title}</h5>
        </div>
        <div className="personality-wrapper-body">
          <div className="text-area-wrapper">
            <label>Text</label>
            <textarea
              disabled={!isActive}
              placeholder="Write Something"
              className="text-area"
            ></textarea>
          </div>
          {title === "Step" ? (
            <select disabled={!isActive}>
              <option>Circular motion</option>
              <option>Forward step</option>
            </select>
          ) : (
            <select disabled={!isActive}>
              <option>Joyful</option>
              <option>Exited</option>
            </select>
          )}
        </div>
        {!isActive && (
          <div className="personality-wrapper inactive-personality-wrapper"></div>
        )}
      </div>
    </>
  );
}

export default Personality;
