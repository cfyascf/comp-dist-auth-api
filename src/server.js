import connectToDb from "./config/db.js";
import app from "./app.js";

try {
    // ..connect mongodb
    connectToDb();
    
    // ..run server
    const port = process.env.SERVER_PORT;
    if(!port) throw new Error("Server port config missing.");

    app.listen(port, () => console.log(`Server running on port ${port}.`));

} catch(err) {
    console.log(`Error running server: ${err}`);
}