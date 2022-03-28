import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types';
function App() {
  return (
  <>
 
<Navbar title= "TextUtils"/>
<div class="my-3"></div>

<div className="container"><TextForm heading='Enter the text to analyze below'/></div>

  </>
  );
}

Navbar.propTypes={title:PropTypes.string.isRequired,
                  aboutText:PropTypes.string.isRequired}

 Navbar.defalutProps = {
   title: 'Set Title here',
   about: 'About text here'
 }                 

export default App;
