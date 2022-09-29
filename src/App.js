import "./App.css";
import { MdAddCircle } from "react-icons/md";
import Expression from "./components/expression item/Expression";
import Personality from "./components/personality/Personality";
import { useState } from "react";

// const sample = [
//   {
//     id: 1,
//     title: "Expression 1",
//     message: "hey",
//     type: "excited",
//   },
//   {
//     id: 2,
//     title: "Expression 2",
//     message: "hey i",
//     type: "excited",
//   },
//   {
//     id: 3,
//     title: "Expression 3",
//     message: "hey me here",
//     type: "bore",
//   },
// ];
function App() {
  const [expressions, setExpressions] = useState([
    {
      id: 1,
      title: "Expression 1",
      message: "hey",
      type: "joyful",
      isSelected: true,
      isPersonality: true,
    },
    {
      id: 2,
      title: "Expression 2",
      message: "hey i",
      type: "forward step",
      isSelected: false,
      isPersonality: false,
    },
    {
      id: 3,
      title: "Expression 3",
      message: "hey me here",
      type: "excited",
      isSelected: false,
      isPersonality: true,
    },
  ]);

  // *** updating the expression

  const updateExpression = (message, id, type) => {
    // console.log("updating", message);
    setExpressions((prevState) => {
      let newState = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, message: message, type: type };
        }
        return item;
      });
      // console.log(newState);
      return [...newState];
    });
  };

  // ******* deleting expression
  const deleteExpression = (id) => {
    console.log("delete Expression", id);
    setExpressions((prevState) => {
      let newState = prevState.filter((item) => item.id != id);
      return [...newState];
    });
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
    let temp = prevState.map((item) => {
      if (item.isSelected) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    return temp;
  };
  const handleAddNewExpression = () => {
    setExpressions((prevState) => {
      let newState = updatePrevState(prevState);
      return [
        {
          id: prevState.length + 1,
          title: `Expression ${prevState.length + 1}`,
          message: "",
          type: "",
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
                type={expression.type}
                isSelected={expression.isSelected}
                selectExpression={selectExpression}
                deleteExpression={deleteExpression}
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
              return (
                <Personality
                  key={expression.id}
                  id={expression.id}
                  message={expression.message}
                  personalityType={expression.type}
                  title={"Personality"}
                  isActive={expression.isPersonality}
                  updateExpression={updateExpression}
                />
              );
            }
          })}
          {/* <Personality title={"Personality"} isActive={true} /> */}
          <Personality title={"Step"} isActive={false} />
        </div>
      </div>
      <div className="output-node-btn-wrapper">
        <button className="output-node-btn">Save Output node</button>
      </div>
    </>
  );
}

export default App;
