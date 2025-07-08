import { fetchStats } from '../util/countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
import {fetchRcStats} from "../util/countRcStats"

fetchRcStats();
fetchStats();
fetchContributors();
fetchLastUpdated();
