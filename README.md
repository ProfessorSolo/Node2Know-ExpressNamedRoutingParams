# Node2Know — Express Named Routing Parameters

This repo demonstrates **named route parameters** in Express.

Named parameters allow parts of the URL to become variables that your server
can read and respond to dynamically.

---

## ✅ Prereqs

- **Node.js** installed
- **npm** (ships with Node)

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm start
```

---

## 🛣️ Routes

### `/things/:thingId`
Example:
```
http://localhost:3000/things/42
```

- `thingId` is captured from the URL
- Available via `req.params.thingId`

---

### `/flights/:from/:to`
Example:
```
http://localhost:3000/flights/YVR/LAX
```

- Multiple parameters are supported
- Express maps each segment by name

---

## 🧠 Key Idea

```js
app.get("/resource/:id", (req, res) => {
  console.log(req.params.id);
});
```

Named route parameters let URLs describe **which resource** you want,
not just **what action** you’re performing.

This pattern is foundational for:
- REST APIs
- database lookups
- detail pages

---

## 📁 Project Structure

```txt
.
├── app.js
├── package.json
└── README.md
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-ExpressNamedRoutingParams.git

---

## License

**Node2Know-LEARN-1.0**
