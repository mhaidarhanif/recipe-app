import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { dataRecipes, type DataRecipe } from "@/modules/recipe/data";
import { useState } from "react";

export function App() {
  const [recipes, setRecipes] = useState(dataRecipes);

  const addRecipe = () => {
    const newRecipe: DataRecipe = {
      id: recipes.length + 1,
      name: "New Recipe",
      description: "Details of the cooking",
      isBeginner: true,
    };

    const updatedRecipes = [...recipes, newRecipe];

    setRecipes(updatedRecipes);
  };

  const removeRecipe = (id: number) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl space-y-10 bg-green-100 p-2 sm:p-8 dark:bg-green-950">
        <h1 className="text-3xl font-bold">Recipe App</h1>

        <Button onClick={addRecipe}>Add Recipe</Button>

        <section className="mt-8 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Add Recipe</CardTitle>
              <CardDescription>
                Fill in the details below to add a new recipe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="recipe-title">Title</Label>
                  <Input
                    id="recipe-title"
                    name="title"
                    placeholder="Recipe title"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="recipe-description">Description</Label>
                  <Textarea
                    id="recipe-description"
                    name="description"
                    placeholder="Recipe description"
                    required
                  />
                </div>
                <Button type="submit" className="self-end">
                  Add Recipe
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section>
          <ul className="space-y-4">
            {recipes.map((recipe) => {
              return (
                <li key={recipe.id}>
                  <Recipe name={recipe.name} isBeginner={recipe.isBeginner} />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeRecipe(recipe.id)}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export function Recipe({
  name,
  isBeginner,
}: {
  name: string;
  isBeginner?: boolean;
}) {
  return (
    <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900">
      <h2 className="text-xl font-semibold">
        {name} {isBeginner && "🔰"}
      </h2>

      {isBeginner && <p>✅ Beginner Friendly</p>}
      {!isBeginner && <p>⭐ Experienced Cook Only</p>}
    </div>
  );
}
