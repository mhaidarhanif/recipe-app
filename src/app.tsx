export function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      <button>Click me</button>

      <Recipe name="Hot Water" isBeginner />
      <Recipe name="Fried Rice" />
      <Recipe name="Scrambled Egg" isBeginner />
      <Recipe name="Chicken Noodle" />
      <Recipe name="Indomie" isBeginner />
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
