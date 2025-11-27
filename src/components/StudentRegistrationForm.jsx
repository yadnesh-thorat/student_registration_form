import { useState } from "react";
import "./StudentForm.css";

const initialData = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  course: "",
  year: "",
  address: "",
};

function StudentRegistrationForm() {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
    setSubmitted(false);
  };

  const validate = () => {
    let temp = {};
    if (!form.fullName) temp.fullName = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) temp.email = "Invalid email";
    if (!form.phone || !/^\d{10}$/.test(form.phone)) temp.phone = "Invalid phone";
    if (!form.gender) temp.gender = "Required";
    if (!form.course) temp.course = "Required";
    if (!form.year) temp.year = "Required";
    if (!form.address) temp.address = "Required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Registered:", form);
    setSubmitted(true);
    setForm(initialData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Student Registration Form</h2>

        {submitted && <div className="success">🎉 Registration Successful!</div>}

        <form onSubmit={handleSubmit}>
          <div className="grid">
            <div>
              <label>Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
              <label>Phone</label>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} />
              {errors.dob && <p className="error">{errors.dob}</p>}
            </div>

            <div>
              <label>Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>

            <div>
              <label>Course</label>
              <select name="course" value={form.course} onChange={handleChange}>
                <option value="">Choose</option>
                <option>B.Tech</option>
                <option>B.Sc</option>
                <option>B.Com</option>
                <option>MBA</option>
              </select>
              {errors.course && <p className="error">{errors.course}</p>}
            </div>

            <div>
              <label>Year</label>
              <select name="year" value={form.year} onChange={handleChange}>
                <option value="">Select</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
                
              </select>
              {errors.year && <p className="error">{errors.year}</p>}
            </div>

            <div className="full">
              <label>Address</label>
              <textarea name="address" rows="3" value={form.address} onChange={handleChange}></textarea>
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>

          <div className="btn-container">
            <button type="button" className="btn clear" onClick={() => setForm(initialData)}>
              Clear
            </button>
            <button type="submit" className="btn submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentRegistrationForm;
