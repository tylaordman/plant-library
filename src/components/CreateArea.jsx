import React from "react";

function CreateArea() {
  return (
    <div>
      <form>
        <input name="name" placeholder="Plant name"/>
        <input name="sciName" placeholder="Scientific name"/>
        <textarea name="description" placeholder="Plant description" rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
