import ReactSlider, { Settings } from "react-slick";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps extends IconButtonProps {
  currentSlide?: number;
  slideCount?: number;
}

interface CarouselProps extends Settings {
  spacing?: number;
  children: React.ReactNode;
}

const ArrowIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  zIndex: 1,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.common.white,
  },
}));

const Slider = styled(ReactSlider)<{ spacing?: number }>(
  ({ theme, spacing = 0 }) => ({
    display: "flex",
    alignItems: "center",
    "& .slick-list": {
      margin: theme.spacing(0, spacing * 2 * -1),
    },
    "& .slick-slide > div": {
      padding: theme.spacing(0, spacing),
    },
    "& .slick-prev-arrow": {
      left: theme.spacing((spacing + 3) * -1),
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    "& .slick-next-arrow": {
      right: theme.spacing((spacing + 3) * -1),
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  })
);

function PrevArrow(props: ArrowProps) {
  const { currentSlide, onClick } = props;
  const isDisabledPreviousSlide = currentSlide === 0;

  return (
    <ArrowIconButton
      aria-disabled={isDisabledPreviousSlide}
      className="slick-prev-arrow"
      disabled={isDisabledPreviousSlide}
      onClick={onClick}
    >
      <ArrowBackIcon />
    </ArrowIconButton>
  );
}

function NextArrow(props: ArrowProps) {
  const { currentSlide = 0, slideCount = 0, onClick } = props;
  const isDisabledNextSlide = currentSlide === slideCount - currentSlide;

  return (
    <ArrowIconButton
      aria-disabled={isDisabledNextSlide}
      className="slick-next-arrow"
      disabled={isDisabledNextSlide}
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </ArrowIconButton>
  );
}

function Carousel(props: CarouselProps) {
  const { spacing, children, ...other } = props;

  return (
    <Slider
      spacing={spacing}
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      {...other}
    >
      {children}
    </Slider>
  );
}

export default Carousel;
