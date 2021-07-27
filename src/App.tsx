import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import MyHead from "./myhead/MyHead";


// 003049
// d62828
// f77f00
// fcbf49
// eae2b7

function App() {
  return (
      <Box width={"100%"}
           height={"100%"}
           bgcolor={"#eae2b7"}
      >
          <Box padding={4}>
              <Grid container
                    justifyContent={"center"}
                    spacing={3}
              >
                  <MyHead/>
              </Grid>
          </Box>
          <Box padding={4}
          >
              <Typography variant={"h3"}
                          align={"center"}
              >
                  Hello World, I'm Claire Chong
              </Typography>
          </Box>
      </Box>
  );
}

export default App;
