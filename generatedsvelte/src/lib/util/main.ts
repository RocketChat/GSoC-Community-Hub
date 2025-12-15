import { fetchStats } from './countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
import { fetchEventData } from './fetchEventData';
import {fetchRcStats} from "../util/countRcStats"
import { fetchAllThreads } from './fetchThreads';

async function main(){
    fetchRcStats();
    fetchStats();
    fetchContributors();
    fetchEventData();
    fetchLastUpdated();
    fetchAllThreads();


}

main();
