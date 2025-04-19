import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

console.log('mounted')
const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/images")
      .then((response) => {
        setImages(response.data);
        console.log("Response:", response.data); // <-- Add this
      })
      .catch((error) => {
        console.error("Error fetching images", error);
      });
  }, []);

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Image Gallery
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </Grid>
    </Container>
  );
};

// 👇 Each image manages its own loading state
const ImageCard = ({ image ,url,title}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={3}
        sx={{
          width: "20rem",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!loaded && <CircularProgress sx={{ marginBottom: 2 }} />}
        <img
          src={image.url}
          alt={image.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-in",
            width: "100%",
            height: "auto",
            maxWidth: "300px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        {loaded && (
          <Typography variant="body1" mt={2} align="center">
            {image.title}
          </Typography>
        )}
      </Paper>
    </Grid>
  );
};

export default ImageGallery;
