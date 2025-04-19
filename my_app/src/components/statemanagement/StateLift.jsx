import React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TshirtCard = ({ title, price, imageUrl, description }) => {
  const [expand, setExpand] = useState(false);
  const onExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div>
      <Card sx={{
        width: 300,
        boxShadow: 3,
        borderRadius: 3,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}>
        <CardHeader title={title} />
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expand}
            onClick={onExpand}
            aria-expanded={expand}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" color="primary">
              Price:{price}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
const StateLift = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
      >
        Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <TshirtCard
          title="Women's Tshirt"
          imageUrl="https://images.bewakoof.com/t1080/women-s-granite-green-simba-face-graphic-printed-oversized-t-shirt-647251-1736314996-1.jpg"
          price="₹799"
          description="Oversized fit | 100% Cotton | Available
        sizes: S, M, L, XL"
        ></TshirtCard>
        <TshirtCard
          title="Men's Tshirt"
          imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgxzE_JhSWsDOeunPrVx3PHfVKaunW8oyPfIfHELajki2vW9JbA0rGI7lDW9t-kYLLoIbUxe7hhjkx9gO6Gm6lOdtCpX_OCdpbV01FIWmPMB5rCHvKledEEA"
          price="₹399"
          description="Regular fit | Soft Cotton Blend | Sizes: M, L, XL, XXL"
        ></TshirtCard>
      </Box>
    </Box>
  );
};

export default StateLift;
