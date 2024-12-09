import "./index.css";
import Button from "./components/Button";

export default function App() {
  return (
    <header className="w-full h-fit px-5 bg-slate-100">
      <div className="w-full max-w-7xl flex items-center mx-auto py-6">
        <div className="w-1/2 grow">
          <h1>Infolent</h1>
        </div>
        <nav className="flex gap-6 items-center">
          <ul className="flex gap-6">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <Button content="Hello World" link="#" />
        </nav>
      </div>
    </header>
  );
}
