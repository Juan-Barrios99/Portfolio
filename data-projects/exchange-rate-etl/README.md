#Exchange Rate ETL

A simple ETL (Extract, Transform, Load) pipeline built with Python that retrieves the latest exchange rates from the Frankfurter API, transforms the data using Pandas, and saves the processed data as a CSV file.

##Technologies
Python
Requests
Pandas
REST API
JSON
CSV

##How to Run

Clone the repository:

git clone https://github.com/Juan-Barrios99/Portafolio.git

Navigate to the project directory:

cd Portafolio/data-projects/exchange-rate-etl

Create and activate a virtual environment (Windows):

python -m venv venv
venv\Scripts\activate

Install the dependencies:

pip install -r requirements.txt

Run the ETL pipeline:

python main.py

##Output

After execution, the processed file will be generated at:

data/processed_rates.csv