import { fetchStats } from './countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
import { fetchEventData } from './fetchEventData';
import {fetchRcStats} from "../util/countRcStats"
import { fetchAllThreads } from './fetchThreads';


import { fetchDataFunction as fetchData__meet_159_discor_stats_counter } from "@meet-159/discor-stats-counter";
async function main(){
    // fetchRcStats();
    // fetchStats();
    // fetchContributors();
    // fetchEventData();
    // fetchLastUpdated();
    // fetchAllThreads();





    await fetchData__meet_159_discor_stats_counter();
}

main();
