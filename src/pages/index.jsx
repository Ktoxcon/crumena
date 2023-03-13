import { useEffect } from "react";
import { Button } from "../components/ui/button/button";

export function Home() {
  useEffect(() => {
    document.body.dataset.theme = "light";
  });

  return (
    <>
      <main>
        <Button>Hello</Button>
      </main>
    </>
  );
}
