import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import LayoutBgFirst from './assets/bg1.jpg';
import LayoutBgSecond from './assets/bg2.jpg';


const App = () => {
  return (
    <>
      <Header
        title='Покемоны'
        descr='существа, обладающие сверхъестественными способностями'
      />
      <Layout
        id={1}
        title={'Бульбазавр'}
        descr={'Бульбазавра можно увидеть дремлющим ' +
        'при ярком солнечном свете. На его спине есть ' +
        'семя. На солнце семя растет и становится больше.'}
        urlBg={LayoutBgFirst}
      />
      <Layout
        id={2}
        title={'Чармандер'}
        descr={'Пламя, горящее на кончике хвоста, является ' +
        'показателем его эмоций. Пламя колышется, когда ' +
        'Чармандер доволен. Если Покемон приходит в ярость, ' +
        'пламя горит интенсивнее.'}
        colorBg={'#4f44a5'}
      />
      <Layout
        id={3}
        title={'Сквиртл'}
        descr={'Сквиртл использует свой панцирь не только для ' +
        'защиты. Такая оболочка округлой формы и канавки на ее ' +
        'поверхности помогают свести к минимуму сопротивление в ' +
        'воде, что позволяет этому Покемону плавать на высоких ' +
        'скоростях.'}
        urlBg={LayoutBgSecond}
      />
      <Footer />
    </>
  );
}

export default App;
