from sqlalchemy import create_engine

from config import (
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
)


def load_data(df):

    engine = create_engine(
        f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )

    df.to_sql(
        "sales",
        engine,
        if_exists="replace",
        index=False
    )

    engine.dispose()

    print(f"{len(df)} registros cargados en PostgreSQL")