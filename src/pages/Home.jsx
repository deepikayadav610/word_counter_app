import Counter from "../components/Counter";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Word Counter</h1>
      <p className="subtitle">Free online character and word count tool.</p>
      <Counter />
    </div>
  );
}

export default Home;
