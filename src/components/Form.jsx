function Form({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form className="container mt-4 p-0">
      {/* Input field for item's name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={handleChange}
          value={value.name || ''}
        />
      </div>
      {/* Input field for item's info */}
      <div className="mb-3">
        <label htmlFor="info" className="form-label">
          Information:
        </label>
        <input
          type="text"
          className="form-control"
          id="info"
          name="info"
          onChange={handleChange}
          value={value.info || ''}
        />
      </div>
      {/* Button to submit form */}
      <button type="submit" id="btn" className="btn btn-primary" onClick={handleSubmit}>
        {buttonType}
      </button>
    </form>
  );
}

export default Form;