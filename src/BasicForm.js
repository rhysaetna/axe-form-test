import "./App.css";

const BasicForm = () => {
  return (
    <div className="App">
      <div>
        <h5>First name</h5>
        <input
          name="firstName"
          type="text"
          placeholder="Enter your first name"
        />
        <h5>Gender</h5>
        Male <input type="radio" name="gender" value="Male" />
        Female <input type="radio" name="gender" value="Female" />
      </div>
    </div>
  );
};

export default BasicForm;
