import { makeStyles } from "@fluentui/react-components";

export const useAnimeStyles = makeStyles({
  coverImg: {
    position: "absolute",
    top: "56px",
    width: "100%",
    left: 0,
    right: 0,
    zIndex: 1,
    height: "350px",
    backgroundSize: "cover",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%",
    backgroundRepeat: "no-repeat",
    "::before": {
      content: "''",
      display: "block",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 2,
      backgroundColor: "rgba(0, 0, 0, .6)",
    },
    "::after": {
      content: "''",
      display: "block",
      height: "150px",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "-1px",
      zIndex: 3,
      backgroundImage: "linear-gradient(0deg, #141414, transparent)",
    },
  },
  posterContainer: {
    marginTop: "220px",
    position: "relative",
    zIndex: 10,
  },
});
