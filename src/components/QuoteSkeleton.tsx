import React from "react";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import GetQuote from "./GetQuote";

const QuoteSkeleton = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="h5" component="div">
          <Skeleton variant="text" animation="wave" width={150} />
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
          <Skeleton variant="text" animation="wave" width={700} height={100} />
        </Typography>
        <GetQuote />
      </CardContent>
    </Card>
  );
};

export default QuoteSkeleton;
