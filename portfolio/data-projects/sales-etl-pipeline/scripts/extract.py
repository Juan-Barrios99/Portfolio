
import pandas as pd

def extract_data():
    df = pd.read_csv(
        "data/datasales.csv",
        encoding="cp1252"
    )
    
    return df


df = extract_data()

print(df.head())
print("Número de filas:", len(df))