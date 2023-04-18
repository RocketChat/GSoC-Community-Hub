import styles from '../styles/Home.module.css';
import Infotiles from '../components/utils/infotiles';
import Newscarousel from '../components/utils/newscarousel';
import Personacircle from '../components/utils/personalcircle';
import { fetchAPI } from '../lib/api';
import { INFOTILES_DATA } from '../lib/const/infotiles';
import { DiscourseTopicListTabs } from '../components/discourse/server';
import { GrowthCounters } from '../components/GrowthCounters';
import { GSoCLeaderboard, GSoCStats } from '../components/GSoCLeaderboard';

export const metadata = {
  title: 'Rocket.Chat: Communications Platform You Can Fully Trust',
  description: 'Rocket.Chat is a Communications Platform You Can Fully Trust',
};

export default async function Page() {
  const carousels = await fetchAPI('/carousels');
  const personas = await fetchAPI('/personas');

  return (
    <>
      <div className="container container-fluid d-flex flex-column align-items-center gap-3 gap-md-5">
        <div className="col d-flex flex-column align-items-center gap-2 py-5 mt-2">
          <h1
            className={`display-4 fw-bold text-center ${styles.hero_heading}`}
          >
            Welcome to the rockonpi <span className={styles.redText}>community</span>
          </h1>
          <p
            className={`fw-regular col-10 col-md-8 text-center ${styles.hero_subheading}`}
          >
            Let&apos;s collaborate in shaping the future of Rocket.Chat on Raspberry Pi and ARM64 SBCs together!
          </p>
        </div>
        <div className="col">
          <GrowthCounters statsUrl={process.env.STATS_URL} />
        </div>
        <div className="col my-5">
          <div className={styles.infotiles}>
            <Infotiles data={INFOTILES_DATA} />
          </div>
        </div>

        <div className={`d-flex flex-column py-5 ${styles.community_news}  `}>
          <h2 className={`mx-auto  w-auto pb-5 ${styles.title}`}>
            Latest Community News
          </h2>
          <Newscarousel carousels={carousels.data} />
        </div>

        <h2 className={`mx-auto w-auto m-5 ${styles.title}`}>
          Get What You Need...
        </h2>
        <Personacircle personas={personas.data} />

        <div className=" d-flex w-100 flex-column py-5 align-items-center justify-content-center">
          <h2 className={`mx-auto w-auto m-2 ${styles.title}`}>
            GSoC Leaderboard
          </h2>
          <div className="d-flex flex-row align-items-start justify-content-center flex-wrap gap-3">
            <GSoCStats
              gsocLeaderboardBaseUrl={process.env.GSOC_LEADERBOARD_BASE_URL}
            />
            <GSoCLeaderboard
              gsocLeaderboardBaseUrl={process.env.GSOC_LEADERBOARD_BASE_URL}
              max={10}
            />
          </div>
        </div>

        <div className=" d-flex w-100 flex-column py-5 align-items-center">
          <h2 className={`mx-auto w-auto m-2 ${styles.title}`}>
            Community Activity
          </h2>
          <DiscourseTopicListTabs
            max={10}
            maxWidth="900px"
            host={process.env.DISCOURSE_HOST}
          />
        </div>
      </div>
    </>
  );
}
