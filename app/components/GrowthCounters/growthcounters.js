import styles from './Growthcounters.module.css';
import Countup from './countup';

export default function Growthcounters({
  items = []
}) {
  if (items.length === 0) {
    return null;
  }
  return (
    <>
      <div className={`d-flex flex-row align-items-center justify-content-center`}>
      {items.map((item, idx) => (
          <div key={item.label} className={`d-flex flex-column align-items-center pe-4 px-md-5 mx-md-3 ${idx > 0 ? 'border-start' : ''}`}>
            <span suppressHydrationWarning={true}>
              {typeof window && (
                <Countup end={item.value} className={` ${styles.countup}`} />
              )}
            </span>
            <span className={` ${styles.text}`}>{item.label}</span>
          </div>
      ))}
      </div>
    </>
  );
}
