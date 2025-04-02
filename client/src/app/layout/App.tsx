import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";

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

  const location = useLocation();

  return (
    <Box sx={{ backgroundColor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth={false} sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
