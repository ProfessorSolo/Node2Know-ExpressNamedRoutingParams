"use strict";

/**
 * Node2Know — Express Named Routing Parameters
 *
 * Named route parameters let us capture values directly from the URL.
 * Express parses the URL and exposes the values on `req.params`.
 *
 * This allows URLs to *describe* resources instead of relying on query strings.
 */

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Route path: /things/:thingId
// Example: http://localhost:3000/things/42
app.get("/things/:thingId", (req, res) => {
  // Express collects named parameters into req.params
  console.log(req.params); // { thingId: '42' }

  res.send(`Details for thing #${req.params.thingId}`);
});

// Multiple Route Parameters
// Route path: /flights/:from/:to
// Example: http://localhost:3000/flights/YVR/LAX
app.get("/flights/:from/:to", (req, res) => {
  const { from, to } = req.params;
  res.send(`Flying from ${from} to ${to}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Created process at PID: ${process.pid}`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`Try: http://localhost:${PORT}/things/42`);
  console.log(`Try: http://localhost:${PORT}/flights/YVR/LAX`);
});
