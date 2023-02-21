export const setAuthToken = (user) => {
  fetch("http://localhost:5000/jwt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user.email }),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
    });
};
