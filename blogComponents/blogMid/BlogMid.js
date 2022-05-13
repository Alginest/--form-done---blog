import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import imgBlogOne from "../../images/blog1.jpg";
const BlogMid = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.blog}>
      <Container className={classes.bigCont}>
        <Grid container className={classes.gridCont} spacing={2}>
          <Grid item lg={8}>
            <Box className={classes.blogItem}>
              <img src={imgBlogOne} alt="" className={classes.img} />
              <Box className={classes.dateBox}>
                <Typography variant="h6" className={classes.date}>
                  30
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.dateSpan}
                >
                  June
                </Typography>
              </Box>
              <Container className={classes.smCont}>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consectetur cumque dolorum, ex incidunt ipsa
                  laudantium necessitatibus neque quae tempora.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Aperiam consectetur
                  cumque dolorum, ex incidunt ipsa laudantium necessitatibus
                  neque quae tempora.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Aperiam consectetur cumque dolorum, ex
                  incidunt ipsa laudantium necessitatibus neque quae tempora.
                </Typography>
              </Container>
            </Box>
          </Grid>
          <Grid item lg={4}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BlogMid;
