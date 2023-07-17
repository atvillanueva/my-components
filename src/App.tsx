import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Carousel from "./components/carousel";

function Item() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={300}
      bgcolor="primary.main"
    >
      1
    </Box>
  );
}

function App() {
  const settings = {
    spacing: 5,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Container maxWidth="md">
      <Carousel {...settings}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </Container>
  );
}

export default App;
