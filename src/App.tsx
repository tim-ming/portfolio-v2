import Background from "./Background";
import Content from "./Content";
export default function App() {
  return (
    <div className="relative">
      <Content />
      <div className="fixed inset-0">
        <Background />
      </div>
    </div>
  );
}
