import './App.css';
const fullName = prompt("What's your full name");

function App() {
  return (
    <div className="container">
      <h1>Welcome, {fullName}</h1> 
    </div>
  );
}
export default App;
