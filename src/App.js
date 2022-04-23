import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{

  const [progress,setProgress] = useState(0);
  
  const setProg=(progress)=>{
    setProgress(progress)
  }

  // const apiKey=process.env.REACT_APP_NEWS_API;
  const apiKey="1ab67f4aaeed46fcb044008b9e41a1de";

    return (
      <>
        <div>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="general" />} />
              <Route path="/general" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="general" />} />
              <Route path="/sports" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="sports" />} />
              <Route path="/business" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="business" />} />
              <Route path="/technology" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="technology" />} />
              <Route path="/science" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="science" />} />
              <Route path="/entertainment" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="entertainment" />} />
              <Route path="/health" element={<News  setProgress={setProg} apiKey={apiKey} pageSize={15} country="in" category="health" />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  
}

export default App;
