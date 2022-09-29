import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import "./personality.css";
function Personality({
  id,
  message,
  personalityType,
  title,
  isActive,
  updateExpression,
}) {
  const [textMessage, setTextMessage] = useState(message);
  const [type, setType] = useState(personalityType);
  // console.log("check", type);
  const makeChanges = () => {
    updateExpression(textMessage, id, type);
  };

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
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              onBlur={makeChanges}
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
            <select
              onChange={(e) => setType(e.target.value)}
              value={type}
              disabled={!isActive}
              onBlur={makeChanges}
            >
              <option value="joyful">Joyful</option>
              <option value="excited">Excited</option>
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
