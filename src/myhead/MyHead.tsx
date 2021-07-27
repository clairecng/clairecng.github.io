import react from "react";
import {Box, Grid} from "@material-ui/core";
import "./style.css";


function MyHead() {
    return (
        <Grid item xs={3} spacing={3}>
                <img src={process.env.PUBLIC_URL + "/profile_picture.jpg"}
                     className={"my-head"}
                     style={{width: "100%", borderRadius: "50%"}}
                     alt={"Claire Chong's Head"}>
                </img>
        </Grid>
    )
}

export default MyHead