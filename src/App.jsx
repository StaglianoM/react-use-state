import './App.css';
import AccordionList from './accordion/accordionList';
import languages from './data/languages';

function App() {
  return (
    <>
      <div>
        <h1>Learn Web Development</h1>
        <AccordionList items={languages} />
      </div>
    </>
  );
}

export default App;
