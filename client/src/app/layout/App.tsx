import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useQuery } from "@tanstack/react-query";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  //OLD CODES FOR LOCAL CRUD
  // const [activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<
  //   Activity | undefined
  // >(undefined);
  // const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get<Activity[]>("http://localhost:5188/api/activities")
  //     .then((response) => setActivities(response.data));
  //   return () => {};
  // }, []);

  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities.find((a) => a.id === id));
  // };

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // };

  // const handleOpenForm = (id?: string) => {
  //   if (id) handleSelectActivity(id);
  //   else handleCancelSelectActivity();
  //   setEditMode(true);
  // };

  // const handleFormClose = () => {
  //   setEditMode(false);
  // };

  // const handleSubmitForm = (activity: Activity) => {
  //   if (activity.id) {
  //     Editing existing activity
  //     setActivities(
  //       activities.map((x) => (x.id === activity.id ? activity : x))
  //     );
  //   } else {
  //     Adding new activity
  //     const newActivity = { ...activity, id: activities.length.toString() };
  //     setActivities([...activities, newActivity]);
  //   }
  //   setEditMode(false);
  // };

  // const handleDelete = (id: string) => {
  //   setActivities(activities.filter((x) => x.id !== id));
  // };

  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((a) => a.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  return (
    <Box sx={{ backgroundColor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <div>Loading...</div>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
