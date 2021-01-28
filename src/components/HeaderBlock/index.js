import s from './style.module.css';
// import ReactLogo from '../../assets/ReactLogo.png';
import { ReactComponent as ReactLogo} from '../../assets/logo.svg';

const HeaderBlock = ({title, hidebackground = false, descr}) => {
  const styleRoot = hidebackground ? {backgroundImage: 'none'} : {};
  return (
    <div className={s.root} style={styleRoot}>
      <div className={s.container}>
        <ReactLogo />
        {/*<img src={ReactLogo} alt='React Logo'/>*/}
        {
          title && <h1 className={s.header}>
            {title}
          </h1>
        }
        { descr && <p className={s.paragraph}>{ descr }</p>}
      </div>
    </div>
  )
}

export default HeaderBlock;
