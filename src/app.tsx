const recipes = [
  { id: 1, name: "Hot Water", isBeginner: true },
  { id: 2, name: "Fried Rice", isBeginner: false },
  { id: 3, name: "Scrambled Egg", isBeginner: true },
  { id: 4, name: "Chicken Noodle", isBeginner: false },
  { id: 5, name: "Indomie", isBeginner: true },
  { id: 6, name: "Mie Sedaap", isBeginner: true },
];

export function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      <ul>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              name={recipe.name}
              isBeginner={recipe.isBeginner}
            />
          );
        })}
      </ul>
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
    <div>
      <h2>
        {name} {isBeginner && "🔰"}
      </h2>
      {isBeginner && <p>✅ Beginner Friendly</p>}
      {!isBeginner && <p>⭐ Experienced Cook Only</p>}
    </div>
  );
}
