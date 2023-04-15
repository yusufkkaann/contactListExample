import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";


function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "yusuf kaan",
          lastName: "yücebilgiç",
          email: "yusufkaanyucebilgic@gmail.com",
          gender: "male",
          hobbies:[],
          country:"turkey"
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="Jane"
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="jane@acme.com"
              type="email"
              value={values.email}
              style={{ width: "200px" }}
            />

            <br />
            <br />
            <span>female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender == "female"}
            />
            <span>male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender == "male"}
            />
            <br />
            <br />
            <div>
              <span>Football</span>
              <input type="checkbox" name="hobbies" value="football" onChange={handleChange} />
            </div>
            <div>
              <span>Basketball</span>
              <input type="checkbox" name="hobbies" value="basketball" onChange={handleChange} />
            </div>
            <div>
              <span>Handball</span>
              <input type="checkbox" name="hobbies" value="handball" onChange={handleChange} />
            </div>
            <br />
            <br />
            <select name="country" onChange={handleChange}> 
            <option value="turkey">turkey</option>
            <option value="germany">germany</option>
            <option value="france">france</option>
            
            
            
            </select>
           

            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
