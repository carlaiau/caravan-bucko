import React from "react";

// Components
import {
  Box,
  Typography,
  CardHeader,
  CardContent,
  Grid,
  Card,
  Button,
} from "@mui/material";
import { AccountBalanceWallet, SportsVolleyball } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Help = () => (
  <div>
    <Box mt={4} mb={2}>
      <Typography variant="h2">SSC Fork</Typography>
    </Box>

    <Grid container spacing={3}>
      <Grid container item md={8} spacing={2} direction="column">
        <Grid item>
          <Card>
            <CardHeader title="Get Started" />
            <CardContent>
              <Box mb={3}>
                <Typography>
                  Start using caravan by choosing to either make a multisig
                  wallet or fully stateless address.
                </Typography>
              </Box>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={3}
              >
                <Grid item xs={10} md={4}>
                  <Button
                    component={Link}
                    to="/wallet"
                    variant="contained"
                    data-cy="setup-wallet-button"
                    size="large"
                    color="primary"
                    startIcon={<AccountBalanceWallet />}
                  >
                    Wallet
                  </Button>
                </Grid>
                <Grid item xs={10} md={4}>
                  <Button
                    variant="contained"
                    data-cy="setup-address-button"
                    size="large"
                    color="secondary"
                    component={Link}
                    to="/address"
                    startIcon={<SportsVolleyball />}
                  >
                    Address
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default Help;
