import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  blog: {
    width: "100%",
    height: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "auto",
  },
  gridCont: {
    width: "100%",
    height: "auto",
  },
  blogItem: {
    width: 750,
    height: 770,
    backgroundColor: "grey",
    position: "relative",
  },
  dateBox: {
    position: "absolute",
    top: "25px",
    left: "35px",
    display: "flex",
  },
  date: {
    padding: "5px 15px",
    backgroundColor: "#222",
    color: "white",
  },
  dateSpan: {
    color: "white",
    padding: "5px 15px",
    backgroundColor: "orange",
  },
  img: {
    width: "100%",
  },
  smCont: {
    marginTop: 30,
  },
  text: {
    lineHeight: 1.8,
  },
}));
