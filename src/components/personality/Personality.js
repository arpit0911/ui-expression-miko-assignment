import React, { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import "./personality.css";

function Personality({
  id,
  message,
  personalityType,
  step,
  isActive,
  updateExpression,
  updateExpressionStep,
  changeCard,
}) {
  const [textMessage, setTextMessage] = useState(message);
  const [type, setType] = useState(personalityType);
  // const [stepMessage, setStepMessage] = useState();
  const [stepSelect, setStepSelect] = useState(step);
  // console.log("check", type, personalityType);
  const makeChanges = () => {
    isActive
      ? updateExpression(textMessage, id, type)
      : updateExpressionStep(textMessage, id, stepSelect);
  };
  useEffect(() => {
    setType(personalityType);
    setStepSelect(step);
  }, [personalityType, step]);

  const handleCardSelect = (id) => {
    // console.log("switch card");
    changeCard(id);
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
        <div className={"personality-wrapper-header"}>
          <button onClick={() => handleCardSelect(id)}>
            {isActive ? (
              <FaRegDotCircle className="selected-icon" />
            ) : (
              <BsCircle className="selected-icon" />
            )}
          </button>
          <h5>Personality</h5>
        </div>
        <div className="personality-wrapper-body">
          <div className="text-area-wrapper">
            <label>Text</label>
            <textarea
              disabled={!isActive}
              value={isActive ? textMessage : ""}
              onChange={(e) => setTextMessage(e.target.value)}
              onBlur={makeChanges}
              placeholder="Write Something"
              className="text-area"
            ></textarea>
          </div>

          <select
            disabled={!isActive}
            onChange={(e) => setType(e.target.value)}
            value={type}
            onBlur={makeChanges}
          >
            <option value="">Select</option>
            <option value="joyful">Joyful</option>
            <option value="excited">Excited</option>
          </select>
          {!isActive && (
            <div className="personality-wrapper-body inactive-personality-wrapper"></div>
          )}
        </div>
      </div>
      {/* ************************* */}

      <div
        className={
          !isActive
            ? "personality-wrapper"
            : "personality-wrapper inActive-wrapper"
        }
      >
        <div className={"personality-wrapper-header"}>
          <button onClick={() => handleCardSelect(id)}>
            {!isActive ? (
              <FaRegDotCircle className="selected-icon" />
            ) : (
              <BsCircle className="selected-icon" />
            )}
          </button>
          <h5>Step</h5>
        </div>
        <div className="personality-wrapper-body">
          <div className="text-area-wrapper">
            <label>Text</label>
            <textarea
              value={isActive ? "" : textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              onBlur={makeChanges}
              disabled={isActive}
              placeholder="Write Something"
              className="text-area"
            ></textarea>
          </div>

          <select
            value={stepSelect}
            onChange={(e) => setStepSelect(e.target.value)}
            disabled={isActive}
            onBlur={makeChanges}
          >
            <option value={""}>Select</option>
            <option value={"circular motion"}>Circular motion</option>
            <option value={"forward step"}>Forward step</option>
          </select>
          {!isActive && (
            <div className="personality-wrapper-body inactive-personality-wrapper"></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Personality;
