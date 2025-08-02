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
    <div className="flex justify-center">
      <section className="w-full max-w-xl space-y-10 p-10">
        <h1 className="text-3xl font-bold">Recipe App</h1>

        <ul className="space-y-4">
          {recipes.map((recipe) => {
            return (
              <li key={recipe.id}>
                <Recipe name={recipe.name} isBeginner={recipe.isBeginner} />
              </li>
            );
          })}
        </ul>
      </section>
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
    <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
      <h2 className="text-xl font-semibold">
        {name} {isBeginner && "🔰"}
      </h2>

      {isBeginner && <p>✅ Beginner Friendly</p>}
      {!isBeginner && <p>⭐ Experienced Cook Only</p>}
    </div>
  );
}
