import React from "react";

const MessageField = () => {
  return (
    <div className="text-field">
      <textarea className="textarea" placeholder="Dear Website...,"></textarea>
      <br />
      <input className="submit-button" type="submit" value="submit" />
    </div>
  );
};

export default MessageField;
