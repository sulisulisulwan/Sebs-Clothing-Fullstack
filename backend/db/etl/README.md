# ETL

For this fictional storefront, I've included a full Extraction Transformation and Loading system to transfer the web platform's data to a new MySQL database via CSV files.

A very simple explanation of the relationships between each file:

`etl_Init.js` initializes the entire ETL process calling `initTableCycler()`, which cycles through each CSV file.  The `etl_Template` is a reusable [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams), which reads the CSV file line by line using the [Node Readline](https://nodejs.org/api/readline.html) module.  represents a table in the database

etl_Init ---> etl_Cycler ---> etl_Template( etl_Options ) ---> etl_LineProcessor