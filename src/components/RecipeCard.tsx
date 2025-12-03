// src/components/RecipeCard.tsx

'use client';

import Image from 'next/image';
import { Card, Badge } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import type { Recipe } from '@/lib/recipeData'; // Now importing only the updated Recipe interface

// We no longer need the union type as we are consistently using Prisma data
type RecipeType = Recipe;

interface RecipeCardProps {
  recipe: RecipeType;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const primaryOrange = '#ff6b35';

  // These fields are now handled based on the Recipe interface from the database.
  // 'rating' and 'time' are optional, so provide defaults if not present.
  const rating = recipe.rating ?? 5; // Default to 5 stars if rating is not provided
  const time = recipe.time ?? 'N/A'; // Default to 'N/A' if time is not provided
  const tags = recipe.tags || []; // Ensure tags is an array, default to empty
  const dietaryRestrictions = recipe.dietaryRestrictions || []; // Ensure dietaryRestrictions is an array, default to empty

  // Provide a fallback image if recipe.image is empty or null
  const imageUrl = recipe.image || '/images/placeholder-recipe.png'; // Use a placeholder if no image URL

  return (
    <Card className="h-100 shadow-sm border-0 recipe-card-custom">
      <div className="recipe-card-image-container">
        <Image
          src={imageUrl}
          alt={recipe.name}
          width={150} // Keep width and height for consistent card sizing
          height={150}
          className="card-img-top recipe-card-image"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold fs-6 mb-1" style={{ color: '#343a40' }}>
          {recipe.name}
        </Card.Title>

        {/* Rating / Time */}
        <div className="d-flex align-items-center mb-2">
          {/* Display stars based on the rating (if available) */}
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <StarFill key={i} size={14} className="me-1" style={{ color: primaryOrange }} />
            ))}
          <span className="text-muted ms-auto" style={{ fontSize: '0.9em' }}>
            {time}
          </span>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-1">
            {tags.map((tag) => (
              <Badge key={tag} bg="warning" className="me-1 text-dark">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Dietary Restrictions */}
        {dietaryRestrictions.length > 0 && (
          <div className="mb-2">
            {dietaryRestrictions.map((d) => (
              <Badge key={d} bg="success" className="me-1">
                {d}
              </Badge>
            ))}
          </div>
        )}

        {/* Removed Price display entirely */}
        {/* <Card.Text className="mt-auto fw-bold" style={{ color: primaryOrange }}>
          {price}
        </Card.Text> */}

        {/* Display owner, useful for debugging or user-specific views */}
        <Card.Text className="text-muted mt-auto" style={{ fontSize: '0.8em' }}>
          By: {recipe.owner}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
