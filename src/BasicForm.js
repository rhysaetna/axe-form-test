import "./App.css";

const BasicForm = () => {
  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
        />
        <h5>Gender</h5>
        <label>
          Male 
          <input type="radio" name="gender" value="Male" />
        </label>
        <label>
          Female 
          <input type="radio" name="gender" value="Female" />
        </label>
      </form>
    </div>
  );
};

export default BasicForm;
