SELECT
/*

[NAME]

- HANA_Resources_CPU_Current

[DESCRIPTION]

- Current CPU information


[DETAILS AND RESTRICTIONS]


[SQL COMMAND VERSION]

- 2016/10/04:  1.0 (initial version)

[INVOLVED TABLES]

- M_SERVICE_STATISTICS

[OUTPUT PARAMETERS]

- CPU_BUSY_PCT:     Percentage of busy CPUs


[EXAMPLE OUTPUT]

--------------
|CPU_BUSY_PCT|
--------------
|       30.26|
--------------

*/
	 ABS(SUM(PROCESS_CPU)) AS CPU_BUSY_PCT
from SYS.M_SERVICE_STATISTICS
