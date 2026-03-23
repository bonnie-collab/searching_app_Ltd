// import React, { useState } from "react";
// import "../css/Signup.css";

// function SignUp() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [error, setError] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setError("");
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2>CREATE ACCOUNT</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <label>DISPLAY NAME</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your name"
//             onChange={handleChange}
//             required
//           />

//           {/* Email */}
//           <label>EMAIL</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="you@example.com"
//             onChange={handleChange}
//             required
//           />

//           {/* Password */}
//           <label>PASSWORD</label>
//           <div className="password-field">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="********"
//               onChange={handleChange}
//               required
//             />
//             <span
//               className="eye"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>

//           {/* Confirm Password */}
//           <label>CONFIRM PASSWORD</label>
//           <div className="password-field">
//             <input
//               type={showConfirm ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="********"
//               onChange={handleChange}
//               required
//             />
//             <span
//               className="eye"
//               onClick={() => setShowConfirm(!showConfirm)}
//             >
//               {showConfirm ? "🙈" : "👁️"}
//             </span>
//           </div>

//           {/* Error message */}
//           {error && <p className="error">{error}</p>}

//           <button type="submit">SIGN UP</button>
//         </form>

//         <p className="signin-text">
//           Already have an account? <span>Sign in</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;