/* eslint-disable no-undef */
import React from "react";
import { Grid, Box } from "@mui/material";
import { externalLink } from "utils/ExternalLink";

const Footer = () => (
  <Box mt={2}>
    <hr />
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item sm={2}>
        {externalLink(
          "https://github.com/carlaiau/caravan-bucko/tree/configurable-client",
          <p>SSC Development purposes only. Not Main commited Code</p>
        )}
      </Grid>

      <Grid item sm={5}>
        <p>
          Original code by Unchained Capital and released under an MIT license.
        </p>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
