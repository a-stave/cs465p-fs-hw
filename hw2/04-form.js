const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const routes = ["/", "form", "submit"];

app.get("/", (req, res) => {
  res.redirect(302, "/form");
});

app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send(`
        <form action="/submit" method="GET">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="comment">Comment:</label>
            <input type="text" id="comment" name="comment"><br><br>
            <legend>Do you want to subscribe to our newsletter?</legend>
            <input type="radio" id="yes" name="subscribe" value="Yes, sign me up for the newsletter." required>
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="subscribe" value="No, thank you.">
            <label for="no">No</label><br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

app.get("/submit", (req, res) => {
  const { name, email, comment, subscribe } = req.query;
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send(`
        <h1>Form Submission Received</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Comments: ${comment ? comment : "n/a"}</p>
        <p>Newsletter: ${subscribe ? subscribe : "Not specified"}</p>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
