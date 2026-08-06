# Exchange Rate ETL

A simple ETL (Extract, Transform, Load) pipeline built with Python that retrieves the latest exchange rates from the Frankfurter API, transforms the data using Pandas, inserts the records into PostgreSQL and saves the processed data as a CSV file.

## Technologies

* Python
* Requests
* Pandas
* REST API
* PostgreSQL
* JSON
* CSV

## How to Run

Clone the repository:

```bash
git clone https://github.com/Juan-Barrios99/Portafolio.git
```

Navigate to the project directory:

```bash
cd Portafolio/data-projects/exchange-rate-etl
```

Create and activate a virtual environment (Windows):

```bash
python -m venv venv
venv\Scripts\activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Run the ETL pipeline:

```bash
python main.py
```

## Output

After execution, the processed file will be generated at:

```text
data/processed_rates.csv
```
```text
PostgreSQL → exchange_rates table
```
