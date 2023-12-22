import * as React from "react";
import { ICourse } from "@/interface/courses.interface";
// import ContentTimeline from "./TimeLine";
// import ImageMasonry from "./Masonry";
// import DataGrid from "./DataGrid";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import AddIcon from "@mui/icons-material/Add";
type Anchor = "top" | "left" | "bottom" | "right";
type Action = "create";
export default function DrawerButton({
  position,
  title,
  action,
} // course,
: {
  position: Anchor;
  title: string;
  action?: Action;
  course?: ICourse;
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <React.Fragment key={position}>
        {action && action == "create" ? (
          <button
            onClick={toggleDrawer(position, true)}
            className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-2 px-5 rounded"
          >
            <i className="ri-add-line"></i>
            <span className="ml-2">{title}</span>
          </button>
        ) : (
          <button onClick={toggleDrawer(position, true)}>{title}</button>
        )}

        {/* <Drawer
          anchor={position}
          open={state[position]}
          onClose={toggleDrawer(position, false)}
          sx={{ height: "100%", padding: "6px" }}
        >
          <Box sx={{ padding: 4 }}>
            <Box
              sx={{
                m: 1,
                position: "absolute",
                right: "left",
                top: "-10px",
                zIndex: "10px",
              }}
            >
              <Fab
                className="z-10"
                color="primary"
                variant="extended"
                onClick={toggleDrawer(position, false)}
              >
                <ChevronLeftIcon sx={{ ml: 1 }} />
                Back
              </Fab>
              <Fab color="primary" variant="extended">
                <CloudUploadIcon sx={{ mr: 1 }} />
                Update
              </Fab>
            </Box>

            <Divider textAlign="center">DATA COURSE</Divider>
            <DataGrid course={course} />
            <Divider textAlign="center">LEARNING ROAD MAP</Divider>
            <ContentTimeline course={course} />
            <Divider textAlign="center">DATA FILE</Divider>
            <ImageMasonry course={course} />
          </Box>
        </Drawer> */}
      </React.Fragment>
    </>
  );
}
