const app = require('./src/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
