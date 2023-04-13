import axios from 'axios';
import classes from './GSoCStats.module.scss';

function GSoCStatItem({ label, value, backgroundColor, textColor }) {
  return (
    <div
      className={classes.StatItem}
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className={classes.Value}>{value}</div>
      <div className={classes.Label}>{label}</div>
    </div>
  );
}
async function GSoCStats({ gsocLeaderboardBaseUrl }) {
  if (!gsocLeaderboardBaseUrl) {
    return null;
  }
  const api = axios.create({
    baseURL: gsocLeaderboardBaseUrl,
  });
  const { totalContributors, totalOpenPRs, totalMergedPRs, totalIssues } = (
    await api.get('api/stats')
  ).data;
  return (
    <div className={classes.Stats}>
      <GSoCStatItem
        label="Contributors"
        value={totalContributors}
        backgroundColor="var(--theme-primary)"
        textColor="var(--theme-on-primary)"
      />
      <GSoCStatItem
        label="Open PRs"
        value={totalOpenPRs}
        backgroundColor="#3fb950"
        textColor="#fff"
      />
      <GSoCStatItem
        label="Merged PRs"
        value={totalMergedPRs}
        backgroundColor="#8957e5"
        textColor="#fff"
      />
      <GSoCStatItem
        label="Issues"
        value={totalIssues}
        backgroundColor="#0dcaf0"
        textColor="#fff"
      />
    </div>
  );
}
export default GSoCStats;
