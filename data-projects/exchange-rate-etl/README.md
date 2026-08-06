Exchange Rate ETL

ETL pipeline built with Python that extracts currency exchange rates from the Frankfurter API, transforms the data with Pandas, and saves the result as a CSV.

Pipeline
API → Extract → Transform → Load → CSV

Technologies:
-Python
-Requests
-Pandas
-REST API
-JSON / CSV

Project Structure:

exchange-rate-etl/
├── data/
├── scripts/
│   ├── extract.py
│   ├── transform.py
│   └── load.py
├── .gitignore
└── README.md

Run:
python scripts/extract.py
python scripts/load.py

Output:

data/processed_rates.csv
