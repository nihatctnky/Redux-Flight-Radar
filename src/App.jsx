import { BrowserRouter, Route, Routes } from "react-router-dom"
import Map from './pages/Map';
import List from './pages/List';
import Header from './components/Header';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getFlights } from './redux/actions/index';
import Modal from './components/Modal';




const App = () => {
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [])


  return (
    <BrowserRouter>
      <Header />


      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>

      {/* Detail state doluysa ekrana modal bas id propu gönder */}
      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  )
}

export default App