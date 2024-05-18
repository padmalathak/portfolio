import "./App.scss";

function App() {
  return (
    <div className="bg-gray-200 p-8">
      <h1 className="text-3xl font-bold text-blue-700">Hello, Tailwind!</h1>
      <p className="mt-4 text-gray-600">
        Welcome to my Tailwind CSS powered React app.
      </p>
      <div className="flex flex-col items-center">
        <div>
          <a href="<https://vitejs.dev>" target="_blank"></a>
          <a href="<https://reactjs.org>" target="_blank"></a>
        </div>
        <h1 className="bg-red-500">Vite + React</h1>
      </div>
    </div>
  );
}

export default App;
