---
inject: true
to: src/redux/sagas/index.js
before: \]\)
skip_if: <%= NAME_CAMEL = name.replace(/\b\w/g, l => l.toUpperCase()) %>
---
    fork(<%= NAME_CAMEL %>Saga),
