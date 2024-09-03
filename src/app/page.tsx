import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-light-h1Text dark:text-dark-h1Text">Hello!</h1>
      <ThemeToggle />
    </main>
  );
}
