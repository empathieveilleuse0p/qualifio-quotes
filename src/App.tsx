import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Typography } from "@mui/material";
import Quote from "./components/Quote";
import { fetchQuotes } from "./features/quote/quoteSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes() as any);
  }, [dispatch]);

  return (
    <Container>
      <Typography
        variant="h3"
        color="secondary"
        sx={{ marginBottom: "0.5rem" }}
      >
        Random Quotes
      </Typography>
      <Quote />
    </Container>
  );
};

export default App;
