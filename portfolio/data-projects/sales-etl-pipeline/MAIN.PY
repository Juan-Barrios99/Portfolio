from scripts.extract import extract_data
from scripts.transform import transform_data
from scripts.load import load_data

df = extract_data()
df = transform_data(df)
load_data(df)
print("Filas finales:", len(df))