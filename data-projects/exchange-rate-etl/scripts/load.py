import json
import pandas as pd

from transform import transform_data


with open("data/raw_rates.json", "r") as file:
    data = json.load(file)


df = transform_data(data)

import os

os.makedirs("data", exist_ok=True)

df.to_csv("data/processed_rates.csv", index=False)


print("Archivo CSV creado correctamente.")
print(df)