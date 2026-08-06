import requests


BASE_CURRENCY = "USD"

TARGET_CURRENCIES = [
    "MXN",
    "EUR",
    "GBP",
    "JPY",
    "CAD"
]


url = "https://api.frankfurter.dev/v2/rates"

params = {
    "base": BASE_CURRENCY,
    "quotes": ",".join(TARGET_CURRENCIES)
}


response = requests.get(url, params=params)

response.raise_for_status()

print(response.status_code)
print(response.url)

data = response.json()

import json

import os

os.makedirs("data", exist_ok=True)

with open("data/raw_rates.json", "w") as file:
    json.dump(data, file, indent=4)