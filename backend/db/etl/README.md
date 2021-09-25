# ETL

For this fictional storefront, I've included a full Extraction Transformation and Loading system to transfer the web platform's data to a new MySQL database via CSV files.

A very simple explanation of the relationships between each file:

## etl_Init.js
`init()` initializes the entire ETL process calling `initTableCycler()`

## etl_Cycler.js
`initTableCycler()` makes the initial call to `cycleThroughTables()`, a recursive function which, well, cycles through the processing of each table.

On each call, it executes `template_exe()` a reusable [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams), which reads the CSV file line by line using the [Node Readline](https://nodejs.org/api/readline.html) module.

## etl_Template.js

Given that each CSV file represents a table with a unique name, filepath, and set of datatypes, `etl_Options` exports instantiations of an **options object** which is fed into the ...

etl_Init ---> etl_Cycler ---> etl_Template( etl_Options ) ---> etl_LineProcessor