import reactLogo from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial','Core']

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
  const Descriptions = reactDescriptions[getRandomInt(2)]
  return(
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {Descriptions} React concept we need for almost any app we are going to build!
      </p>
    </header>
  );
}