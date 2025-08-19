import type { DataRecipe } from "@/modules/recipe/data";
import { useParams } from "react-router";

export function RecipeId() {
  const params = useParams();

  const id = Number(params.id);

  const storedRecipes = localStorage.getItem("recipes") || "[]";
  const recipes = JSON.parse(storedRecipes) as DataRecipe[];
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
  );
}
