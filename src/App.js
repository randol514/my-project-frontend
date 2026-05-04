import Layout from './components/layout/Layout';

import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from './router/RoutesConfig';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <RoutesConfig />
        </Layout>
      </Router>
    </>
  );
}

export default App;
