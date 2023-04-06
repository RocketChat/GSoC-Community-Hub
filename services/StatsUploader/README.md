StatsUploader is a helper service which could be run in a secure environment to upload stats to a data source.

# To set 
Add the following environment variables
```
RC_HOST=http://localhost:3000
RC_USER_ID=
RC_PERSONAL_ACCESS_TOKEN=

STATS_STRATEGY="JSON_STRATEGY"
STATS_JSON_STRATEGY_URL=
STATS_UPDATE_DELAY_SECONDS=3600
```

# To start the service
You can run the service as a pm2 servce.
In /services/StatsUploader
```
pm2 start /startService.js --name stats-service
```

Now the the stats-service will post statistics data to the json source at an interval of 3600 seconds.
