import { useParams } from "react-router";

export function RecipeId() {
  const params = useParams();

  const id = Number(params.id);

  return (
    <div>
      <h1>Recipe: {id}</h1>
    </div>
  );
}
