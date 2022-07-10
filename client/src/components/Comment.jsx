import React from 'react'
import { Divider, Grid } from "@material-ui/core";
import { format } from 'timeago.js';
export default function Comment({comment}) {
  return (
        <>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid  item   md={4}>
              <h4 style={{ margin: 0, textAlign: "left" }}>Name Surname</h4>
              <p style={{ textAlign: "left" }}>
              {comment.text}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                {format(comment.updated)}
              </p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        </>
  )
}
