import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeItem = ({ recipe, onSelect }) => (
  <Card onClick={() => onSelect(recipe)} sx={{ cursor: 'pointer' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={recipe.recipe.label}
        height="140"
        image={recipe.recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.recipe.label}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RecipeItem;
