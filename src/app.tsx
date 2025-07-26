export function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      <button>Click me</button>

      <Recipe name="Fried Rice" />
      <Recipe name="Chicken Noodle" />
      <Recipe name="Scrambled Egg" />
    </div>
  );
}

export function Recipe({ name }: { name: string }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
