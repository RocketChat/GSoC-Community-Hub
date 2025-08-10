import { fetchStats } from './countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
import {fetchRcStats} from "./countRcStats"
import { fetchEventData } from './fetchEventData';
import { fetchDiscordStats } from './countDiscordStats';

fetchRcStats();
fetchDiscordStats();
// fetchStats();
// fetchContributors();
// fetchLastUpdated();
fetchEventData();
