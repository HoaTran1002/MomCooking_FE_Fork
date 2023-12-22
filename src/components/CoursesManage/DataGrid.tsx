// import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { ICourse } from "@/interface/courses.interface";
import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
interface Props {
  course?: ICourse;
}
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function DataGrid({ course }: Props) {
  return (
    <Paper
      sx={{
        margin: "auto",
        width: "auto",
        height: "auto",
        // maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        boxShadow: "none",
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%", height: "100%" }}>
        <Grid item>
          <ButtonBase sx={{ width: "250px", height: "250px" }}>
            <Img
              alt="background course"
              src={`${course?.image ? course?.image : "null"}`}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <FormControl
                fullWidth
                sx={{ height: "auto", p: 2 }}
                variant="standard"
              >
                {/* <InputLabel htmlFor="standard-adornment-amount">
                    Title
                  </InputLabel> */}
                <Input
                  multiline
                  defaultValue={course?.title ? course?.title : "null"}
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">Title:</InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                fullWidth
                sx={{ height: "auto", p: 2 }}
                variant="standard"
              >
                {/* <InputLabel htmlFor="standard-adornment-amount">
                    Description
                  </InputLabel> */}
                <Input
                  defaultValue={
                    course?.description ? course?.description : "null"
                  }
                  multiline
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      Description:
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item>
            <FormControl
              fullWidth
              sx={{ height: "auto", p: 2 }}
              variant="standard"
            >
              {/* <InputLabel htmlFor="standard-adornment-amount">
                  Price
                </InputLabel> */}
              <Input
                multiline
                defaultValue={course?.price}
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">Price:</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
