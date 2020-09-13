import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Registro from "./Registro/Components/Registro";
import Logo from "./Registro/img/logo.png";
import Spinner from "react-bootstrap/Spinner";


class App extends React.Component {

  state = {
    cambio: true
  }

  render() {
    if(this.state.cambio){
      setTimeout(() => {
        this.setState({cambio:false})
      }, 3500);
      return (
        <div className="Container">
          <div><img className="logo" src={Logo}  />
          
        </div>
        <div className="Spinner">
          <Spinner animation="grow" />
          <h3>Cargando...</h3>
        </div>
        </div>
        
      )
    }else{
      return(
        <Registro />
      )
    }
    
  }
}

/*
const App = () => {
  const [lyricsItem, setLyricsItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const lyricsFuntion = async () => {
    try {
      const data = await axios
        .get(`https://api.lyrics.ovh/v1/GHOSTEMANE/Squeeze`)
        .then((res) => {
          console.log(res);
          setLyricsItem(res.data.lyrics);
        });
      setLoading(true);
    } catch (e) {
      console(e);
    }
  };

  useEffect(() => {
    lyricsFuntion();
  }, []);

  return (
    <div className="App">
      {lyricsItem}
      {loading ? lyricsItem : <Spinner animation="grow" />}
    </div>
  );
};
*/
export default App;