import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";

export default function ActivityDashboard() {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={6}>
        <ActivityList />
      </Grid2>
      <Grid2 size={6}>Activity Filters go here</Grid2>
    </Grid2>
  );
}
