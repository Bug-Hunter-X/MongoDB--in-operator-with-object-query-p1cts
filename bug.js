```javascript
const myQuery = { field: 'value' };

// Incorrect use of $in operator
const result = db.collection('myCollection').find({ field: { $in: [myQuery] } });
```