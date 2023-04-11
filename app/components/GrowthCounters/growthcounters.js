import axios from 'axios';
import styles from './Growthcounters.module.css';
import Countup from './countup';

export default async function Growthcounters({ statsUrl }) {
  if (!statsUrl) {
    return null;
  }
  const counters = [];

  try {
    const stats = (await axios.get(process.env.STATS_URL)).data;
    counters.push(
      {
        label: 'Users',
        value: stats.totalUsers || 0,
      },
      {
        label: 'Messages',
        value: stats.totalMessages || 0,
      },
      {
        label: 'Online',
        value: stats.onlineUsers || 0,
      }
    );
  } catch (e) {
    console.error('Could not load statistics from rocketchat server');
    console.error(e);
  }

  if (counters.length === 0) {
    return null;
  }
  return (
    <>
      <div className="w-100 d-flex flex-row align-items-stretch justify-content-center gap-3">
        {counters.map((item, idx) => (
          <>
            {idx > 0 ? <div className="border-start" /> : null}
            <div
              key={item.label}
              className="d-flex flex-column align-items-center px-md-5 mx-md-3"
            >
              <span suppressHydrationWarning>
                {typeof window && (
                  <Countup end={item.value} className={` ${styles.countup}`} />
                )}
              </span>
              <span className={` ${styles.text}`}>{item.label}</span>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
