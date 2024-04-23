```mermaid
sequenceDiagram
  participant Browser
  participant Server

activate Browser
  Browser->>Server: POST /exampleapp/new_note with note content in request body
  activate Server
  Server->>Browser: HTTP Status 302 (redirect) with Location: /notes
  deactivate Server
  Browser->>Server: GET /exampleapp/main.css  // Fetches stylesheet
  activate Server
  Server-->>Browser: the CSS file
  deactivate Server
  Browser->>Server: GET /exampleapp/main.js  // Fetches JavaScript
  activate Server
  Server-->>Browser: the JavaScript file
  deactivate Server
  Browser->>Server: GET /exampleapp/data.json  // Fetches raw notes data
  activate Server
  Server-->>Browser: [{ "content": "...", "date": "..." }, ...] (JSON data)
  deactivate Server
  Note right of Browser: Browser updates UI
  deactivate Browser
```
