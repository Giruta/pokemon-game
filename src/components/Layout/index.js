import l from './style.module.css';
import classNames from 'classnames';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
  const styleBgImg = urlBg ? {backgroundImage: `url(${urlBg})`} : {};
  const styleBgColor = colorBg ? {backgroundColor: colorBg} : {};
  const styleRoot = Object.assign({}, styleBgImg, styleBgColor);

  return (
    <section
      className={l.root}
      id={id}
      style={styleRoot}
    >
      <div className={l.wrapper}>
        <article>
          <div className={l.title}>
            <h3>
              {title}
            </h3>
            <span className={l.separator}></span>
          </div>
          <div className={classNames(l.desc, l.full)}>
            <p>
              {descr}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
