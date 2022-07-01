
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Statistical Poem Generator<img src='poetrythumbnail.png' alt="Image failed to display"></img></h1>
        </div>
      </header>
      
      <body className="App-body">
          <div>
            <form>
              <label>
                <input type="text" name="Text" />
              </label><div></div>
                <input type="submit" value="Generate" />
            </form>
          </div>
      </body>
    </div>
  );
}

export default App;
