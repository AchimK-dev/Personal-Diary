import { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");

  const handleSave = () => {

    if (!title.trim() || !date || !text.trim()) {
        alert("Please fill in all required fields (Title, Date, and Text).");
        return;
      }

    const newEntry = { title, date, imageUrl, text };

    // load data
    const existing = JSON.parse(localStorage.getItem("myData")) || [];
    const updated = [...existing, newEntry];

    // save new data
    localStorage.setItem("myData", JSON.stringify(updated));

    // clear all
    setTitle("");
    setDate("");
    setImageUrl("");
    setText("");

    // exit modal
    document.getElementById("my_modal_6").checked = false;

    // update cardlist
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <label htmlFor="my_modal_6" className="btn">Add Entry</label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-center">Save your Shit</h3>

          <input
            placeholder="Title"
            className="input mt-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            className="input mt-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            placeholder="Image URL"
            className="input mt-2 w-full"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <textarea
            className="textarea mt-2 w-full"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}>
          </textarea>

          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input