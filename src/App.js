import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import List from "./components/List";
import Select from "./UI/Select";
import Form from "./components/Form";
import Footer from "./components/Footer";
import SaveDataAlert from "./components/SaveDataAlert";

function App() {
  const dataFilePath = "/data/list.json";

  const emptyItem = {
    id: "",
    class: "",
    lastName: "",
    firstName: "",
    nick: "",
  };

  const [list, setList] = useState([]);
  const [isListLoaded, setIsListLoaded] = useState(false);
  const [isListToShow, setIsListToShow] = useState(true);
  const [edditedItem, setEdditedItem] = useState(emptyItem);
  const [saveDataAlert, setSaveDataAlert] = useState(false);

  useEffect(() => {
    fetch(dataFilePath)
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((er) => {
        console.warn("Помилка завантаження данних");
        alert(er);
      })
      .finally(() => setIsListLoaded(true));
  }, []);

  const showListHandler = () => setIsListToShow(!isListToShow);
  const firstBtnText = `${isListToShow ? "Приховати " : "Показати "}список`;

  const saveFile = (content, fileName) => {
    const content_json = JSON.stringify(content);
    const blob = new Blob([content_json], { type: "application/json" });
    saveAs(blob, fileName);
  };

  const onExit = () => {
    setSaveDataAlert(true);
  };

  const deleteItemByIdHandler = (_id) => {
    setList(list.filter((obj) => obj.id !== _id));
  };

  const handleEditedItem = (item) => {
    if (item.id === "") {
      item = { ...item, id: uuidv4() };
      console.log("item in App handleEditedItem line 59 (empty id)", item);

      setList([...list, item]);
    } else {
      const tempItem = { ...item };
      // console.log("item in App handleEditedItem line 564 (not-empty id)", item);
      // console.log(
      //   "tempItem in App handleEditedItem line 564 (not-empty id)",
      //   tempItem
      // );

      deleteItemByIdHandler(item.id);
      setList((prev) => [...prev, tempItem]);
    }
    setEdditedItem(emptyItem);
  };

  const addItemHandler = (item) => {
    item.id === "" ? (item = { ...item, id: uuidv4() }) : (item = { ...item });
    setList([...list, item]);
  };

  const editItemByIdHandler = (_id) => {
    const item = list.filter((obj) => obj.id === _id)[0];
    setEdditedItem(item);
    // console.log("In App (edit item): _id =", _id);
  };

  const setEmptyEditedItem = () => {
    setEdditedItem(emptyItem);
  };

  const saveHandler = () => {
    saveFile(list, "list.json");
    setSaveDataAlert(false);
  };
  const notSaveHandler = () => {
    window.location.reload();
    setSaveDataAlert(false);
  };
  const exitHandler = () => {
    setSaveDataAlert(false);
  };

  // console.log('editedItem in App line 95',   edditedItem);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="outerContainer">
          {saveDataAlert ? (
            <SaveDataAlert
              saveHandler={saveHandler}
              notSaveHandler={notSaveHandler}
              exitHandler={exitHandler}
            />
          ) : (
            <div className="container">
              <h1>Список учнів</h1>
              <menu className="menu">
                <Select onClickHandler={showListHandler}>{firstBtnText}</Select>
                <Select onClickHandler={() => saveFile(list, "list.json")}>
                  Зберегти
                </Select>
                <Select onClickHandler={onExit}>Закінчити</Select>
              </menu>
              {isListLoaded && isListToShow && (
                <div className="listBlock">
                  <Form
                    addItem={addItemHandler}
                    handleEditedItem={handleEditedItem}
                    edditedItem={edditedItem}
                    setEmptyEditedItem={setEmptyEditedItem}
                  />
                  <List
                    list={list}
                    deleteItemById={deleteItemByIdHandler}
                    editItemById={editItemByIdHandler}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
