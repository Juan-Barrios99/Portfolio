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