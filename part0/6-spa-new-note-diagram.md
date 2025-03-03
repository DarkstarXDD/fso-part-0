```mermaid
sequenceDiagram

participant Browser
participant Server

Note right of Browser: User enters text and clicks "save"
Note right of Browser: Add new note to the list
Note right of Browser: Rerender the note list

Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate Server
Server-->>Browser: HTTP Status Code 201
deactivate Server
```
