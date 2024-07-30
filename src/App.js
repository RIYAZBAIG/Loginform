import { Card, CardContent } from "@mui/material";
import { Landing } from "./Landing/Landing";

function App() {
  return (
    <Card sx={{bgcolor:"lightcyan"}}>
      <CardContent>
        <Landing/>
      </CardContent>
    </Card>
  );
}

export default App;
