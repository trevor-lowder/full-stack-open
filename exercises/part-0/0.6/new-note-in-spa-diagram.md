```mermaid
sequenceDiagram
  participant Browser
  participant Server

activate Browser
  Browser->>Server: POST /exampleapp/new_note_spa
  Note right of Browser: Browser executes JavaScript to render new UI and deliver JSON payload
  activate Server
  Server->>Browser: HTTP Status 201 (created) 
  deactivate Server
  deactivate Browser
```