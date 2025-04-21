import { ThemeToggle } from "./components/theme-toogle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors duration-300">
      <ThemeToggle />
      <h1 className="text-4xl font-bold mb-4 text-center">
        Bienvenido a SkyNavigator Airlines
      </h1>
      <p className="text-lg text-center max-w-xl">
        Plataforma para pasajeros, vuelos y gestión aérea. Todo lo que necesitas, en un solo lugar.
      </p>
    </div>
  );
}
