import axios from 'axios';
import classes from './GSoCLeaderboard.module.scss';

async function GSoCLeaderboard({
  gsocLeaderboardBaseUrl,
  max = 10,
  showViewAll = true,
}) {
  if (!gsocLeaderboardBaseUrl) {
    return null;
  }
  const api = axios.create({
    baseURL: gsocLeaderboardBaseUrl,
  });
  const { data } = await api.get('/api/data');
  const { ranks } = (await api.get('api/rank')).data;
  return (
    <div className={classes.GSoCLeaderboard}>
      <div className={classes.TableWrapper}>
        <table className={classes.Table}>
          <thead className={classes.Head}>
            <tr className={classes.Row}>
              <th className={classes.Cell}>#</th>
              <th className={classes.Cell}>Contributor</th>
              <th className={classes.Cell}>Open PRs</th>
              <th className={classes.Cell}>Merged PRs</th>
              <th className={classes.Cell}>Issues</th>
            </tr>
          </thead>
          <tbody className={classes.Body}>
            {ranks.slice(0, max).map((username, idx) => (
              <tr className={classes.Row} key={username}>
                <td className={classes.Cell}>{idx + 1}</td>
                <td className={`${classes.Cell} ${classes.User}`}>
                  <span className={classes.Avatar}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={data[username].avatarUrl} />
                  </span>
                  <span className={classes.Name}>
                    <a href={data[username].home}>{username}</a>
                  </span>
                </td>
                <td className={classes.Cell}>
                  <a href={data[username].openPRsLink}>
                    {data[username].openPRsNumber}
                  </a>
                </td>
                <td className={classes.Cell}>
                  <a href={data[username].mergedPRsLink}>
                    {data[username].mergedPRsNumber}
                  </a>
                </td>
                <td className={classes.Cell}>
                  <a href={data[username].issuesLink}>
                    {data[username].issuesNumber}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showViewAll ? (
        <div className={classes.ViewAll}>
          <a href={gsocLeaderboardBaseUrl}>View All</a>
        </div>
      ) : null}
    </div>
  );
}
export default GSoCLeaderboard;
