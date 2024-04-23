```mermaid
sequenceDiagram
  participant Browser
  participant Server

activate Browser
  Browser->>Server: POST /exampleapp/new_note_spa
  activate Server
  Note right of Browser: Browser executes JavaScript to render new UI and deliver JSON payload
  Server->>Browser: HTTP Status 201 (created)
  deactivate Server
  deactivate Browser
```
