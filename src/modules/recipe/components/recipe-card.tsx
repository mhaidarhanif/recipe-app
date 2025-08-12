import { Button } from "@/components/ui/button";

export function RecipeCard({
  id,
  name,
  description,
  isBeginner,
  removeRecipe,
}: {
  id: number;
  name: string;
  description: string;
  isBeginner?: boolean;
  removeRecipe: (id: number) => void;
}) {
  return (
    <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900">
      <h2 className="text-xl font-semibold">
        {name} {isBeginner && "🔰"}
      </h2>

      <p>{description}</p>

      <Button variant="destructive" size="sm" onClick={() => removeRecipe(id)}>
        Delete
      </Button>
    </div>
  );
}
