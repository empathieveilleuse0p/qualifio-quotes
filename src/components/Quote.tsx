import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import GetQuote from "./GetQuote";
import { getFetchStatus, selectAllQuotes } from "../features/quote/quoteSlice";
import QuoteSkeleton from "./QuoteSkeleton";

const Quote = () => {
  const quotes = useSelector(selectAllQuotes);
  const fetchStatus = useSelector(getFetchStatus);

  if (!quotes || !quotes.length) {
    return <Typography variant="body2">No Quotes available</Typography>;
  }

  if (fetchStatus === "loading") {
    return <QuoteSkeleton />;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Quote of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {quotes[0].author}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
          {quotes[0].content}
        </Typography>
        <GetQuote />
      </CardContent>
    </Card>
  );
};

export default Quote;
