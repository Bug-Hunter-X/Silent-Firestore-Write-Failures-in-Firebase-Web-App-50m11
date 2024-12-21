This improved version uses async/await and includes comprehensive error handling to catch and report all potential Firestore write errors. 

```javascript
async function writeDataToFirestore(data) {
  try {
    await firebase.firestore().collection('myCollection').add(data);
    console.log('Data written successfully!');
  } catch (error) {
    console.error('Error writing data:', error);
    // Optionally, implement retry logic or user feedback based on the error.
  }
}
```
The async/await structure ensures the write operation completes before continuing execution.  The `try...catch` block traps any exceptions during the write process, providing crucial debugging information and enabling appropriate error handling.