// import React from 'react'

// function Page1() {
//   return (
//     <div>
//         <form
//   onSubmit={(e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const fullName = formData.get("fullName");

//     if (!email || !password || (!isLogin && !fullName)) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     if (isLogin) {
//       console.log("Logging in with:", { email, password });
//       alert("Login successful (mock)");
//     } else {
//       console.log("Registering with:", { fullName, email, password });
//       alert("Registration successful (mock)");
//     }

//     e.target.reset(); // Clear form
//   }}
//   style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
// >

//     </div>
//   )
// }

// export default Page1