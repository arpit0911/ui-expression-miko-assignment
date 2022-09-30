import "./App.css";
import { MdAddCircle } from "react-icons/md";
import Expression from "./components/expression item/Expression";
import Personality from "./components/personality/Personality";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [expressions, setExpressions] = useState([
    {
      id: 1,
      title: "Expression 1",
      message: "hey",
      personality: "joyful",
      step: "",
      isSelected: true,
      isPersonality: true,
    },
    {
      id: 2,
      title: "Expression 2",
      message: "hey i",
      personality: "",
      step: "forward step",
      isSelected: false,
      isPersonality: false,
    },
    {
      id: 3,
      title: "Expression 3",
      message: "hey me here",
      personality: "excited",
      step: "",
      isSelected: false,
      isPersonality: true,
    },
  ]);

  // *** updating the expression

  const updateExpression = (message, id, type) => {
    // console.log("updating", type);
    setExpressions((prevState) => {
      let newState = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, message: message, personality: type };
        }
        return item;
      });
      // console.log(newState);
      return [...newState];
    });
  };

  const updateExpressionStep = (message, id, step) => {
    // console.log("updating", message);
    setExpressions((prevState) => {
      let newState = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, message: message, step: step };
        }
        return item;
      });
      // console.log(newState);
      return [...newState];
    });
  };

  // ******* deleting expression
  const deleteExpression = (id) => {
    // console.log("delete Expression", id);
    setExpressions((prevState) => {
      let newState = prevState.filter((item) => item.id !== id);
      return [...newState];
    });
  };
  // *********** clear selection

  const clearSelection = (id) => {
    // console.log("clear selection");
    setExpressions((prevState) => {
      let newState = prevState.map((item) => {
        if (item.id === id) {
          if (item.isPersonality) {
            return { ...item, personality: "" };
          } else {
            return { ...item, step: "" };
          }
        }
        return item;
      });
      return [...newState];
    });
  };

  // ******** change card

  const changeCard = (id) => {
    // console.log("change card ", id);
    setExpressions((prevState) => {
      let newState = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isPersonality: !item.isPersonality };
        }
        return item;
      });
      return [...newState];
    });
  };

  // ***********show output node

  const showOutputNode = () => {
    let payload = {};
    expressions.map((expression, index) => {
      if (expression.isPersonality) {
        return (payload[index] = {
          text: expression.message,
          personality: expression.personality,
        });
      } else {
        return (payload[index] = {
          text: expression.message,
          step: expression.step,
        });
      }
    });
    let res = "";
    // console.log("output = ", payload);
    for (const [key, value] of Object.entries(payload)) {
      const { text, step, personality } = value;
      console.log(key);
      res += `{text: "${text}", ${
        step ? `step: "${step}", ` : `personality: "${personality}"`
      }}\n`;
    }
    alert(`{\n${res}}`);
  };

  const selectExpression = (id) => {
    // console.log("select expression");
    setExpressions((prevState) => {
      let temp = updatePrevState(prevState);
      let newState = temp.map((item) => {
        if (id === item.id) {
          return { ...item, isSelected: true };
        }
        return item;
      });
      return [...newState];
    });
  };
  const updatePrevState = (prevState) => {
    let temp = prevState.map((item, index) => {
      if (item.isSelected) {
        return {
          ...item,
          title: `Expression ${index + 1}`,
          isSelected: !item.isSelected,
        };
      }

      return { ...item, title: `Expression ${index + 1}` };
    });
    return temp;
  };
  const handleAddNewExpression = () => {
    setExpressions((prevState) => {
      let newState = updatePrevState(prevState);
      return [
        {
          id: uuid(),
          title: `Expression ${prevState.length + 1}`,
          message: "",
          personality: "",
          isSelected: true,
          isPersonality: true,
        },
        ...newState,
      ];
    });
  };
  return (
    <>
      <h4>Node Name</h4>
      <div className="main-grid">
        <div className="expression-side-container">
          {expressions.map((expression) => {
            return (
              <Expression
                key={expression.id}
                id={expression.id}
                title={expression.title}
                message={expression.message}
                type={expression.personality}
                step={expression.step}
                isSelected={expression.isSelected}
                selectExpression={selectExpression}
                deleteExpression={deleteExpression}
                clearSelection={clearSelection}
                isPersonality={expression.isPersonality}
              />
            );
          })}
          <div className="add-btn-wrapper">
            <MdAddCircle className="add-icon" />
            <button onClick={handleAddNewExpression} className="add-btn">
              Add new Expression
            </button>
          </div>
        </div>
        <div className="element-main-container">
          {expressions.map((expression) => {
            if (expression.isSelected) {
              // console.log("expression=", expression);
              return (
                <Personality
                  key={expression.id}
                  id={expression.id}
                  message={expression.message}
                  step={expression.step}
                  personalityType={expression.personality}
                  isActive={expression.isPersonality}
                  updateExpression={updateExpression}
                  changeCard={changeCard}
                  updateExpressionStep={updateExpressionStep}
                />
              );
            }
            return;
          })}
        </div>
      </div>
      <div className="output-node-btn-wrapper">
        <button onClick={showOutputNode} className="output-node-btn">
          Save Output node
        </button>
      </div>
    </>
  );
}

export default App;
