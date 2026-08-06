import os
import pandas as pd
import psycopg2
from dotenv import load_dotenv

# Cargar variables del archivo .env
load_dotenv()

# Leer datos transformados
df = pd.read_csv("data/processed_rates.csv")




# Conectar a PostgreSQL
conexion = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    port=os.getenv("DB_PORT")
)

cursor = conexion.cursor()


query = """
INSERT INTO exchange_rates
(load_date, base_currency, target_currency, exchange_rate)
VALUES (%s, %s, %s, %s)
ON CONFLICT (load_date, base_currency, target_currency)
DO NOTHING;
"""



for _, row in df.iterrows():

    cursor.execute(
        query,
        (
            row["date"],
            row["base"],
            row["quote"],
            row["rate"]
        )
    )


conexion.commit()

cursor.close()
conexion.close()


print("Datos cargados en PostgreSQL correctamente.")
