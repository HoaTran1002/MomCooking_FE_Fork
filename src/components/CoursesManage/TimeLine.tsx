// import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ICourse } from "@/interface/courses.interface";
import Button from "@mui/material/Button";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
interface IProp {
  course?: ICourse;
}
// const EmptyTimeLine = () => {
//   return <div>no data</div>;
// };
export default function ContentTimeline({ course }: IProp) {
  if (course) {
    const roadmaps = course.roadmaps;
    console.log("course roadmaps:", roadmaps);
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  09:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  12:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  9:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={7}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="flex justify-center">
                <div className="flex justify-center flex-col">
                  <TextField
                    id="outlined-multiline-static"
                    label="Name"
                    multiline
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Skill"
                    multiline
                    rows={2}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="knowledge"
                    multiline
                    rows={3}
                  />
                </div>
              </div>
              <Button variant="contained" endIcon={<PlaylistAddCircleIcon />}>
                ADD
              </Button>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}
