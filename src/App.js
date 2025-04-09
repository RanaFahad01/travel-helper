import logo from "./logo.svg";
import "./App.css";
import treeImage from "./assets/pngimg.com - palm_tree_PNG93314.png";
import suitcaseImage from "./assets/Suitcase_PNG_Clipart.png";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <ItemForm></ItemForm>
      <PackingList></PackingList>
      <div className="divider"></div>
      <Stats packingListLength={5}></Stats>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="app-header">
      <img
        className="header-image"
        src={treeImage}
        alt="A palm tree"
        draggable="false"
      ></img>
      <h1 className="header-text">MY TRAVEL HELPER</h1>
      <img
        className="header-image"
        src={suitcaseImage}
        alt="A suitcase"
        draggable="false"
      ></img>
    </div>
  );
}

function ItemForm() {
  return (
    <div className="item-form-container">
      <form className="item-form">
        <h2 className="form-description">Add an item!</h2>
        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="item-name" className="form-label">
              Item name:
            </label>
            <input type="text" id="item-name" className="form-input"></input>
          </div>
          <div className="form-field">
            <label htmlFor="item-count" className="form-label">
              Amount:
            </label>
            <input
              type="number"
              min={0}
              id="item-count"
              className="form-input"
            ></input>
          </div>
          <button type="submit" className="form-submit-button">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

function PackingList({ packingListItems }) {
  packingListItems = [
    {
      description: "Shirt",
      amount: 1,
      isComplete: false,
    },
    {
      description: "Toothbrush",
      amount: 2,
      isComplete: false,
    },
    {
      description: "Mints",
      amount: 5,
      isComplete: false,
    },
    {
      description: "Shawarmas",
      amount: 10,
      isComplete: false,
    },
  ];

  function packedHandle(index) {}

  return (
    <div className="packing-list">
      {packingListItems.map((listItem, index) => (
        <div className="list-item" key={index}>
          <p className="list-item-amount">{listItem.amount}</p>
          <div className="desc-button">
            <p className="item-desc">{listItem.description}</p>
            <button
              className="packed-button"
              onClick={() => packedHandle(index)}
            >
              {!listItem.isComplete
                ? "PACKED"
                : "HOW DARE YOU HACK THIS WEBAPP"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Stats({ packingListLength }) {
  return (
    <p className="packing-list-description">
      You have <em>{packingListLength}</em> items left to pack!
    </p>
  );
}

export default App;
