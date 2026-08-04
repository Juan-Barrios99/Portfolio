import pandas as pd


def transform_data(df):

    # Limpiar espacios en los nombres de las columnas
    df.columns = df.columns.str.strip()

    # Limpiar espacios al inicio y final de los valores de texto
    for col in df.select_dtypes(include="object").columns:
        df[col] = df[col].str.strip()

    df["Row ID"] = pd.to_numeric(
        df["Row ID"],
        errors="coerce"
    )

    df["Postal Code"] = pd.to_numeric(
        df["Postal Code"],
        errors="coerce"
    )

    df["Sales"] = pd.to_numeric(
        df["Sales"],
        errors="coerce"
    )

    df["Quantity"] = pd.to_numeric(
        df["Quantity"],
        errors="coerce"
    )

    df["Profit"] = pd.to_numeric(
        df["Profit"],
        errors="coerce"
    )

    # Comprobar valores nulos
    print("Nulos encontrados:", df.isnull().sum().sum())

    # Comprobar registros duplicados
    print("Duplicados encontrados:", df.duplicated().sum())

    # Eliminar registros duplicados
    df = df.drop_duplicates()

    # Eliminar filas con valores nulos
    df = df.dropna()

    # Comprobar después de limpiar
    print("Nulos después:", df.isnull().sum().sum())
    print("Duplicados después:", df.duplicated().sum())


    return df


if __name__ == "__main__":
    df = pd.read_csv("data/datasales.csv", encoding="cp1252")

    print("Antes de transformar:", df.shape)

    df = transform_data(df)

    print("Después de transformar:", df.shape)

    print(df.head())