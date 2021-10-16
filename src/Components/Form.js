import React from "react";

const Form = ({ children, btnText, callback, enabled }) => {
  return (
    <form className="form" onSubmit={callback}>
      {children}
      <div className="align-center">{}</div>
      {enabled && (
        <button
          className="btn btn-danger btn-lg margintop"
          type="submit"
          style={{ paddingLeft: 65, paddingRight: 65, width: "100%" }}>
          {btnText}
        </button>
      )}
    </form>
  );
};

export default Form;
