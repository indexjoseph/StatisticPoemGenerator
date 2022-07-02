
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1> <img src="https://cdn-icons-png.flaticon.com/512/2505/2505737.png" height="55" width="75" class="center"></img> <></> Statistical Poem Generator</h1>
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
