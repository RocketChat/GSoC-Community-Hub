This component makes use of *Opensource-Contribution-Leaderboard* project by RocketChat [https://github.com/RocketChat/Opensource-Contribution-Leaderboard](https://github.com/RocketChat/Opensource-Contribution-Leaderboard)

The url of the *Opensource-Contribution-Leaderboard* should be set in the environment variable
```
GSOC_LEADERBOARD_BASE_URL=https://gsoc.rocket.chat
```
# Components
## GSOC LEADERBOARD
```
<GSoCLeaderboard
	gsocLeaderboardBaseUrl="https://gsoc.rocket.chat"
	max={10}
/>
```
## GSOC STATS
```
<GSoCStats
	gsocLeaderboardBaseUrl="https://gsoc.rocket.chat"
/>
```
