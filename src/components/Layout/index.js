import l from './style.module.css';
import classNames from 'classnames';

const Layout = ({id, title, colorTitle, desc, urlBg, colorBg, children}) => {
  const styleRoot = {},
        styleTitle = {};

  if (urlBg) {
    styleRoot.backgroundImage = `url(${urlBg}`;
  }

  if (colorBg) {
    styleRoot.backgroundColor = colorBg;
  }

  if (colorTitle) {
    styleTitle.color = colorTitle;
  }

  return (
    <section
      className={l.root}
      id={id}
      style={styleRoot}
    >
      <div className={l.wrapper}>
        <article>
          <div className={l.title}>
            <h3 style={styleTitle}>
              {title}
            </h3>
            <span className={l.separator}></span>
          </div>
          <div className={classNames(l.desc, l.full)}>
            <p>{desc}</p>
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
