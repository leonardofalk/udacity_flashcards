---
inject: true
to: src/redux/reducers/index.js
before: \}\)
skip_if: <%= NAME_PASCAL = name.replace(/\b\w/g, l => l.toUpperCase()) %>
---
  <%= NAME_PASCAL %>: require('./<%= NAME_PASCAL %>').reducer,
  
