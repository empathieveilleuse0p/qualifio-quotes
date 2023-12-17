import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes, getFetchStatus } from "../features/quote/quoteSlice";

function GetQuote() {
  const dispatch = useDispatch();
  const fetchStatus = useSelector(getFetchStatus);

  return (
    <Button
      disabled={fetchStatus === "loading"}
      variant="outlined"
      color="primary"
      onClick={() => dispatch(fetchQuotes() as any)}
    >
      Get New Quote
    </Button>
  );
}

export default GetQuote;
