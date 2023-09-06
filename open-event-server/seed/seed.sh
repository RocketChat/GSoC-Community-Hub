INIT_FLAG=var/log/seed/init_db

if [ ! -e $INIT_FLAG ];then
    sh var/log/seed/sqlc.sh | exit 1
    
    echo "--Cleaning Up the database--"
    
    ls var/log/seed
    psql -h localhost -p 5432 -U open_event_user open_event -f var/log/seed/seed.sql
    echo "--Creating SQL files--"
    PGPASSWORD=opev_pass psql -h localhost -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_event.sql
    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_speaker.sql
    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_ticket.sql

    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_open_event.sql
    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_open_speaker.sql
    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_open_ticket.sql

    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_coffee_meet.sql
    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_coffee_meet_speaker.sql
    PGPASSWORD=opev_pass psql -h opev-postgres -p 5432 -U open_event_user open_event -f var/log/seed/tmp/seed_coffee_meet_ticket.sql

    echo "--Removing dangling SQL files--"
    rm -f var/log/seed/tmp/*.sql
    touch $INIT_FLAG

else
    echo "--Database initilalization is already done--"
fi



