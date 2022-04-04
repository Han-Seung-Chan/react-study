import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  const countProps = {
    a: 1,
    b: 2,
  };
  return (
    <Container>
      <MyHeader />
      <Counter {...countProps} />
      <MyFooter />
    </Container>
  );
}

export default App;
