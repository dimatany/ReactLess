import {rerenderEntireTree} from './render';
import data from './BLL/Data';



rerenderEntireTree(data);
{/* //удалить потом //
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <StrictMode>
    <App appData={data} addComment={addComment}/>
  </StrictMode>
);
 */}