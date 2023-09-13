import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ className, title, children }) {
  // Перевірка на обов'язкові пропуски
  if (!className || !title || !children) {
    throw new Error("Section component is missing required props.");
  }

  // Валідація className (якщо потрібно)
  if (className !== 'light' && className !== 'dark') {
    throw new Error("Invalid className for Section component.");
  }

  return (
    <section className={css[className]}>
      <div className="container">
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
