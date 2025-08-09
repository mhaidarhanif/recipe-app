import { Button } from "@/components/ui/button";

export function AddButton() {
  function handleClick() {
    console.log("Added Thing!");
  }

  return <Button onClick={handleClick}>Add Thing</Button>;
}
