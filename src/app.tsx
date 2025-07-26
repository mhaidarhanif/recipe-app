export function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      <button>Click me</button>

      <Recipe />
    </div>
  );
}

export function Recipe() {
  const name = "Fried Rice";

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
