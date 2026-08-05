import Link from "next/link";

const CodeCell = ({ children }: { children: string }) => {
  return (
    <div className="mt-5 overflow-hidden rounded-md border border-[#d9d9d9] bg-[#f7f7f7] shadow-sm">

      <div className="border-b border-[#d9d9d9] bg-[#fafafa] px-4 py-2">
        <span className="font-mono text-xs text-[#777]">
          In [ ]:
        </span>
      </div>

      <pre className="overflow-x-auto bg-[#f7f7f7] p-5 font-mono text-[13px] leading-6">
        <code>{children}</code>
      </pre>

    </div>
  );
};



const Output = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-3 rounded-md border border-gray-200 bg-white">

      <div className="border-b border-gray-100 bg-[#fafafa] px-4 py-2 font-mono text-xs text-gray-400">
        Out [ ]:
      </div>

      <div className="p-4">
        {children}
      </div>

    </div>
  );
};



const NotebookStep = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => {

  return (
    <section className="mb-20">

      <div className="mb-4 flex items-center gap-3">

        <span className="font-mono text-xs text-gray-400">
          {number}
        </span>

        <h2 className="text-lg font-semibold">
          {title}
        </h2>

      </div>

      {children}

    </section>
  );
};




export default function EndToEndSalesETLPipeline() {

return (

<main className="min-h-screen bg-[#F8F7F3] text-neutral-900">

<div className="mx-auto max-w-5xl px-6 py-20">
  <Link
  href="/"
  className="inline-flex items-center mb-12 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white"
>
  ← Back to Home
</Link>


{/* HEADER */}


<header className="mb-24 text-center">


<p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
Data Engineering Project
</p>


<h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">

End-to-End
<br/>
Sales ETL Pipeline

</h1>



<p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">

Building an ETL pipeline using Python and PostgreSQL
to extract, transform and load sales data into a
structured database.

</p>



<div className="mt-8 flex flex-col items-center gap-6">
  <div className="flex flex-wrap justify-center gap-2">
    {[
      "Python",
      "Pandas",
      "PostgreSQL",
      "SQLAlchemy",
      "ETL",
    ].map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-gray-300 px-4 py-2 text-sm"
      >
        {tech}
      </span>
    ))}
  </div>

  <Link
    href="https://github.com/Juan-Barrios99/Portfolio"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
  >
    🚀 View Source Code on GitHub
  </Link>
</div>


</header>





{/* OVERVIEW */}


<section className="mb-24">


<p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
Project Overview
</p>


<h2 className="text-3xl font-bold mb-8">
From raw sales data to a database
</h2>



<p className="max-w-3xl text-lg leading-8 text-gray-600">

This project implements an end-to-end ETL workflow.
Sales data is extracted from CSV files, transformed
using Python and Pandas, and loaded into PostgreSQL
using SQLAlchemy for future analytics.

</p>


</section>






{/* NOTEBOOK */}



<div className="border-t border-gray-300 pt-16">


<p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
ETL Pipeline
</p>


<h2 className="text-3xl font-bold mb-16">
Workflow Implementation
</h2>





{/* EXTRACT */}



<NotebookStep
number="STEP 1"
title="Extract data"
>


<CodeCell>
{`import pandas as pd


def extract_data():

    df = pd.read_csv(
        "data/datasales.csv",
        encoding="cp1252"
    )

    return df`}
</CodeCell>



<Output>

<p className="text-gray-600">

Raw sales data extracted from CSV files
using Python and Pandas.

</p>

</Output>


</NotebookStep>







{/* TRANSFORM */}



<NotebookStep
number="STEP 2"
title="Transform and clean data"
>


<CodeCell>
{`def transform_data(df):

    df.columns = df.columns.str.strip()

    df = df.drop_duplicates()

    df = df.dropna()

    df["Sales"] = pd.to_numeric(
        df["Sales"],
        errors="coerce"
    )

    return df`}
</CodeCell>



<Output>

<p className="text-gray-600">

Data cleaning process included removing duplicates,
handling missing values and converting data types.

</p>

</Output>


</NotebookStep>








{/* LOAD */}



<NotebookStep
number="STEP 3"
title="Load data into PostgreSQL"
>


<CodeCell>
{`from sqlalchemy import create_engine


engine = create_engine(
    "postgresql://localhost:5432/sales_db"
)


df.to_sql(
    "sales",
    engine,
    if_exists="replace",
    index=False
)`}
</CodeCell>



<Output>

<p className="text-gray-600">

Clean dataset successfully loaded into PostgreSQL.

</p>

</Output>


</NotebookStep>






{/* RESULT */}



<section className="border-t border-gray-300 pt-16">


<p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-400">
Pipeline Result
</p>


<div className="rounded-xl bg-white border border-gray-200 p-8 text-center">


<p className="font-mono text-sm text-gray-700">

Raw CSV

<br/>
↓
<br/>

Python ETL Process

<br/>
↓
<br/>

Clean Dataset

<br/>
↓
<br/>

PostgreSQL Database

<br/>
↓
<br/>

Ready for Analytics

</p>


</div>


</section>





</div>






<footer className="border-t border-gray-300 pt-16 mt-20 text-center">


<p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">
Project Stack
</p>


<p className="text-sm text-gray-600">

Python · Pandas · PostgreSQL · SQLAlchemy · ETL

</p>


</footer>



</div>


</main>


)

}