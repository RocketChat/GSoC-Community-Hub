import { fetchStats } from './countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
import { fetchEventData } from './fetchEventData';
// import {fetchRcStats} from "../util/countRcStats"
import { fetchAllThreads } from './fetchThreads';

//fetchRcStats();
// fetchStats();
fetchContributors();
fetchEventData();
// fetchLastUpdated();
fetchAllThreads();