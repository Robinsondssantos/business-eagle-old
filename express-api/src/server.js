import app from './App';
import serverConfig from './config/server';

const port = serverConfig.port

app.listen(port, () => console.log(`Listening on port: ${port}`));