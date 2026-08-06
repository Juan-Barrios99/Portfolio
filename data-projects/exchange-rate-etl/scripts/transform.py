import json
import pandas as pd


def transform_data(data):

    df = pd.DataFrame(data)

    # Remove duplicate records
    df = df.drop_duplicates()

    # Remove rows with missing values
    df = df.dropna()

    # Sort currencies with MXN first
    df = df.sort_values(
        by="quote",
        key=lambda x: x.map({
            "MXN": 0,
            "CAD": 1,
            "EUR": 2,
            "GBP": 3,
            "JPY": 4
        })
    )

    return df


# Leer datos extraídos
with open("data/raw_rates.json", "r") as file:
    data = json.load(file)


# Transformar
df = transform_data(data)


# Guardar CSV procesado
df.to_csv(
    "data/processed_rates.csv",
    index=False
)


print("Transformación completada.")
print(df)
