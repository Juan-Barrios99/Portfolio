const CodeCell = ({ children }: { children: string }) => {
  const highlightCode = (code: string) => {
    const keywords = /\b(import|from|for|in|if|else|return|def|as)\b/g;
    const functions =
      /\b(read_csv|head|info|isnull|sum|fillna|to_numeric|to_datetime|astype|strip|title|replace|dropna|figure|barplot|title|xticks|show|groupby|agg|sort_values)\b/g;
    const numbers = /\b\d+(\.\d+)?\b/g;
    const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
    const comments = /(#.*)$/gm;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    const regex =
      /(#.*$|(["'`])(?:(?=(\\?))\3.)*?\2|\b(import|from|for|in|if|else|return|def|as)\b|\b(read_csv|head|info|isnull|sum|fillna|to_numeric|to_datetime|astype|strip|title|replace|dropna|figure|barplot|xticks|show|groupby|agg|sort_values)\b|\b\d+(\.\d+)?\b)/gm;

    let match;

    while ((match = regex.exec(code)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${lastIndex}`}>
            {code.slice(lastIndex, match.index)}
          </span>
        );
      }

      const value = match[0];

      if (value.startsWith("#")) {
        parts.push(
          <span key={`comment-${match.index}`} className="text-[#6a9955]">
            {value}
          </span>
        );
      } else if (
        value.startsWith('"') ||
        value.startsWith("'") ||
        value.startsWith("`")
      ) {
        parts.push(
          <span key={`string-${match.index}`} className="text-[#a31515]">
            {value}
          </span>
        );
      } else if (
        /^(import|from|for|in|if|else|return|def|as)$/.test(value)
      ) {
        parts.push(
          <span key={`keyword-${match.index}`} className="text-[#0000ff]">
            {value}
          </span>
        );
      } else if (
        /^(read_csv|head|info|isnull|sum|fillna|to_numeric|to_datetime|astype|strip|title|replace|dropna|figure|barplot|xticks|show|groupby|agg|sort_values)$/.test(
          value
        )
      ) {
        parts.push(
          <span key={`function-${match.index}`} className="text-[#795e26]">
            {value}
          </span>
        );
      } else if (/^\d/.test(value)) {
        parts.push(
          <span key={`number-${match.index}`} className="text-[#098658]">
            {value}
          </span>
        );
      } else {
        parts.push(
          <span key={`other-${match.index}`}>
            {value}
          </span>
        );
      }

      lastIndex = match.index + value.length;
    }

    if (lastIndex < code.length) {
      parts.push(
        <span key={`remaining-${lastIndex}`}>
          {code.slice(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <div className="mt-5 overflow-hidden rounded-md border border-[#d9d9d9] bg-[#f7f7f7] shadow-sm">

      {/* JUPYTER HEADER */}

      <div className="flex items-center border-b border-[#d9d9d9] bg-[#fafafa] px-4 py-2">

        <span className="font-mono text-xs text-[#777]">
          In&nbsp;[ ]:
        </span>

      </div>

      {/* CODE */}

      <pre className="overflow-x-auto bg-[#f7f7f7] p-5 font-mono text-[13px] leading-6 text-[#24292e]">
        <code>{highlightCode(children)}</code>
      </pre>

    </div>
  );
};


const Output = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-3 overflow-x-auto rounded-md border border-gray-200 bg-white">

      <div className="border-b border-gray-100 bg-[#fafafa] px-4 py-2 font-mono text-xs text-gray-400">
        Out[ ]:
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

        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>

      </div>

      {children}

    </section>
  );
};


export default function DataPreparationSalesAnalysis() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-neutral-900">

      <div className="mx-auto max-w-5xl px-6 py-20">

        {/* HEADER */}

        <header className="mb-24 text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
            Data Analytics Project
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Data Preparation
            <br />
            & Sales Analysis
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Cleaning and standardizing a messy sales dataset using Python
            before performing exploratory data analysis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">

            {[
              "Python",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "Seaborn",
              "Jupyter Notebook",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm"
              >
                {technology}
              </span>
            ))}

          </div>

        </header>


        {/* PROJECT OVERVIEW */}

        <section className="mb-24">

          <div className="mb-8">

            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Project Overview
            </p>

            <h2 className="text-3xl font-bold">
              From messy data to reliable analysis
            </h2>

          </div>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            The objective of this analysis was to clean and standardize
            a messy sales dataset to ensure data accuracy and reliability.
            After preparing the data, the analysis identified sales trends,
            regional performance, and category distribution.
          </p>

        </section>


        {/* NOTEBOOK */}

        <div className="border-t border-gray-300 pt-16">

          <div className="mb-16">

            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Jupyter Notebook
            </p>

            <h2 className="text-3xl font-bold">
              Data Preparation
            </h2>

            <p className="mt-3 text-gray-600">
              The following sections reproduce the main workflow of the
              original analysis.
            </p>

          </div>


          {/* STEP 1 */}

          <NotebookStep
            number="STEP 1"
            title="Import libraries"
          >

            <CodeCell>
{`import warnings
warnings.filterwarnings("ignore")

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns`}
            </CodeCell>

          </NotebookStep>


          {/* STEP 2 */}

          <NotebookStep
            number="STEP 2"
            title="Load the dataset"
          >

            <CodeCell>
{`df = pd.read_csv("messy_sales.csv")
df.head(10)`}
            </CodeCell>

            <Output>

              <div className="min-w-[850px] overflow-hidden">

                <table className="w-full border-collapse text-xs">

                  <thead>

                    <tr className="border-b border-gray-300 text-left">

                      <th className="p-2">Date</th>
                      <th className="p-2">Region</th>
                      <th className="p-2">Product</th>
                      <th className="p-2">Category</th>
                      <th className="p-2">Units Sold</th>
                      <th className="p-2">Unit Price</th>
                      <th className="p-2">Total Sales</th>
                      <th className="p-2">Profit Margin (%)</th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      [
                        "January 15 2024",
                        "north",
                        "tablet",
                        "electronics",
                        "32",
                        "USD 858",
                        "########",
                        "10%",
                      ],

                      [
                        "1/30/2024",
                        "north",
                        "Tablet",
                        "Electronics",
                        "72",
                        "$833.83",
                        "########",
                        "15 percent",
                      ],

                      [
                        "2/13/2024",
                        "EAST",
                        "laptop",
                        "ELEC",
                        "NaN",
                        "489.12",
                        "NaN",
                        "0.08",
                      ],

                      [
                        "4/28/2024",
                        "West",
                        "Laptop",
                        "gadget",
                        "thirty",
                        "$733.46",
                        "########",
                        "0.1",
                      ],

                      [
                        "2/18/2024",
                        "EAST",
                        "Phone",
                        "ELEC",
                        "47",
                        "USD 373",
                        "40,920",
                        "0.1",
                      ],

                      [
                        "April 03 2024",
                        "South",
                        "laptop",
                        "Gadgets",
                        "twenty",
                        "670.28",
                        "3103",
                        "8 percent",
                      ],

                      [
                        "1/28/2024",
                        "north",
                        "tablet",
                        "electronics",
                        "thirty",
                        "758.58",
                        "37,789",
                        "8 percent",
                      ],

                      [
                        "March 15 2024",
                        "West",
                        "Tablet",
                        "Gadgets",
                        "47",
                        "$241.65",
                        "11,484",
                        "12%",
                      ],

                    ].map((row, index) => (

                      <tr
                        key={index}
                        className="border-b border-gray-100"
                      >

                        {row.map((value, column) => (

                          <td
                            key={column}
                            className="p-2 whitespace-nowrap"
                          >
                            {value}
                          </td>

                        ))}

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </Output>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              The original dataset contains inconsistent dates, text
              capitalization, categories, numeric values, currencies,
              percentages, and missing values.
            </p>

          </NotebookStep>


          {/* STEP 3 */}

          <NotebookStep
            number="STEP 3"
            title="Check for missing values and info"
          >

            <CodeCell>
{`df.info()`}
            </CodeCell>

            <Output>

              <pre className="font-mono text-xs leading-6 text-gray-700">
{`RangeIndex: 200 entries, 0 to 199
Data columns (total 8 columns):

Date               200 non-null
Region             200 non-null
Product            200 non-null
Category           200 non-null
Units Sold         196 non-null
Unit Price         200 non-null
Total Sales        197 non-null
Profit Margin (%)  200 non-null

dtypes: object(8)`}
              </pre>

            </Output>

          </NotebookStep>


          {/* STEP 3.5 */}

          <NotebookStep
            number="STEP 3.5"
            title="Handle missing values"
          >

            <CodeCell>
{`df.isnull().sum()`}
            </CodeCell>

            <Output>

              <div className="space-y-2 font-mono text-sm text-gray-700">

                <p>Date..................... 0</p>
                <p>Region................... 0</p>
                <p>Product.................. 0</p>
                <p>Category................. 0</p>
                <p>Units Sold............... 4</p>
                <p>Unit Price............... 0</p>
                <p>Total Sales.............. 3</p>
                <p>Profit Margin (%)........ 0</p>

              </div>

            </Output>

            <CodeCell>
{`df["Units Sold"] = pd.to_numeric(
    df["Units Sold"],
    errors="coerce"
)

df["Total Sales"] = pd.to_numeric(
    df["Total Sales"],
    errors="coerce"
)`}
            </CodeCell>

            <CodeCell>
{`df["Units Sold"] = df["Units Sold"].fillna(
    df["Units Sold"].mean()
)

df["Total Sales"] = df["Total Sales"].fillna(
    df["Total Sales"].mean()
)`}
            </CodeCell>

          </NotebookStep>


          {/* STEP 4 */}

          <NotebookStep
            number="STEP 4"
            title="Clean column names"
          >

            <CodeCell>
{`df.columns = df.columns.str.strip()`}
            </CodeCell>

          </NotebookStep>


          {/* STEP 5 */}

          <NotebookStep
            number="STEP 5"
            title="Fix date formats"
          >

            <CodeCell>
{`df["Date"] = pd.to_datetime(
    df["Date"],
    errors="coerce"
)`}
            </CodeCell>

            <Output>

              <div className="grid gap-3 md:grid-cols-2">

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-gray-400">
                    Before
                  </p>

                  <p className="mt-2 font-mono">
                    January 15 2024
                  </p>

                </div>

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-gray-400">
                    After
                  </p>

                  <p className="mt-2 font-mono">
                    2024-01-15
                  </p>

                </div>

              </div>

            </Output>

          </NotebookStep>


          {/* STEP 6 */}

          <NotebookStep
            number="STEP 6"
            title="Standardize text columns"
          >

            <CodeCell>
{`for col in ["Region", "Product", "Category"]:
    df[col] = df[col].str.strip().str.title()`}
            </CodeCell>

            <Output>

              <div className="grid gap-3 md:grid-cols-3">

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    Region
                  </p>

                  <p className="mt-2 font-mono text-sm">
                    north → North
                  </p>

                </div>

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    Product
                  </p>

                  <p className="mt-2 font-mono text-sm">
                    tablet → Tablet
                  </p>

                </div>

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    Category
                  </p>

                  <p className="mt-2 font-mono text-sm">
                    gadget → Gadget
                  </p>

                </div>

              </div>

            </Output>

          </NotebookStep>


          {/* STEP 7 */}

          <NotebookStep
            number="STEP 7"
            title="Convert units sold to numeric"
          >

            <CodeCell>
{`df["Unit Sold"] = pd.to_numeric(
    df["Units Sold"],
    errors="coerce"
)`}
            </CodeCell>

            <Output>

              <p className="text-sm leading-6 text-gray-600">
                Text values such as{" "}
                <span className="font-mono">
                  "thirty"
                </span>{" "}
                are converted to missing numeric values and handled during
                the cleaning process.
              </p>

            </Output>

          </NotebookStep>


          {/* STEP 8 */}

          <NotebookStep
            number="STEP 8"
            title="Clean currency columns"
          >

            <CodeCell>
{`for col in ["Unit Price", "Total Sales"]:
    df[col] = df[col].astype(str)

    df[col] = (
        df[col]
        .str.replace("[$,USD ]", "", regex=True)
        .str.strip()
    )

    df[col] = pd.to_numeric(
        df[col],
        errors="coerce"
    )`}
            </CodeCell>

            <Output>

              <div className="grid gap-3 md:grid-cols-2">

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    Raw value
                  </p>

                  <p className="mt-2 font-mono">
                    USD 858
                  </p>

                </div>

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    Clean value
                  </p>

                  <p className="mt-2 font-mono">
                    858.00
                  </p>

                </div>

              </div>

            </Output>

          </NotebookStep>


          {/* STEP 9 */}

          <NotebookStep
            number="STEP 9"
            title="Fix profit margin"
          >

            <CodeCell>
{`df["Profit Margin (%)"] = (
    df["Profit Margin (%)"]
    .astype(str)
    .str.replace("%", "", regex=True)
    .str.replace("percent", "", regex=True)
    .astype(float)
)

df["Profit Margin (%)"] = np.where(
    df["Profit Margin (%)"] < 1,
    df["Profit Margin (%)"] * 100,
    df["Profit Margin (%)"]
)`}
            </CodeCell>

            <Output>

              <div className="grid gap-3 md:grid-cols-3">

                <div className="rounded border border-gray-200 p-4">
                  <p className="font-mono text-sm">
                    10%
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    → 10.0
                  </p>
                </div>

                <div className="rounded border border-gray-200 p-4">
                  <p className="font-mono text-sm">
                    15 percent
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    → 15.0
                  </p>
                </div>

                <div className="rounded border border-gray-200 p-4">
                  <p className="font-mono text-sm">
                    0.08
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    → 8.0
                  </p>
                </div>

              </div>

            </Output>

          </NotebookStep>


          {/* STEP 10 */}

          <NotebookStep
            number="STEP 10"
            title="Drop rows with missing key data"
          >

            <CodeCell>
{`df_cleaned = df.dropna(
    subset=["Date", "Total Sales", "Region"]
)`}
            </CodeCell>

          </NotebookStep>


          {/* STEP 11 */}

          <NotebookStep
            number="STEP 11"
            title="Check cleaned results"
          >

            <CodeCell>
{`df_cleaned.head(15)`}
            </CodeCell>

            <Output>

              <div className="min-w-[850px] overflow-hidden">

                <table className="w-full border-collapse text-xs">

                  <thead>

                    <tr className="border-b border-gray-300 text-left">

                      <th className="p-2">Date</th>
                      <th className="p-2">Region</th>
                      <th className="p-2">Product</th>
                      <th className="p-2">Category</th>
                      <th className="p-2">Units Sold</th>
                      <th className="p-2">Unit Price</th>
                      <th className="p-2">Total Sales</th>
                      <th className="p-2">Profit Margin</th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      [
                        "2024-01-15",
                        "North",
                        "Tablet",
                        "Electronics",
                        "32.000000",
                        "858.00",
                        "26096.323077",
                        "10.0",
                      ],

                      [
                        "2024-04-03",
                        "South",
                        "Laptop",
                        "Gadgets",
                        "52.307692",
                        "670.28",
                        "3103.000000",
                        "8.0",
                      ],

                      [
                        "2024-03-15",
                        "West",
                        "Tablet",
                        "Gadgets",
                        "47.000000",
                        "241.65",
                        "26096.323077",
                        "12.0",
                      ],

                      [
                        "2024-01-09",
                        "West",
                        "Phone",
                        "Gadget",
                        "52.307692",
                        "796.00",
                        "26096.323077",
                        "8.0",
                      ],

                    ].map((row, index) => (

                      <tr
                        key={index}
                        className="border-b border-gray-100"
                      >

                        {row.map((value, column) => (

                          <td
                            key={column}
                            className="p-2 whitespace-nowrap"
                          >
                            {value}
                          </td>

                        ))}

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </Output>

          </NotebookStep>


          {/* STEP 11.5 */}

          <NotebookStep
            number="STEP 11.5"
            title="Standardize Category column"
          >

            <CodeCell>
{`df_cleaned["Category"] = df_cleaned["Category"].replace({
    "Elec": "Electronics",
    "Gadget": "Gadgets"
})`}
            </CodeCell>

            <Output>

              <div className="grid gap-3 md:grid-cols-2">

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    Before
                  </p>

                  <div className="mt-3 space-y-1 font-mono text-sm">
                    <p>Elec</p>
                    <p>Gadget</p>
                  </div>

                </div>

                <div className="rounded border border-gray-200 p-4">

                  <p className="text-xs text-gray-400">
                    After
                  </p>

                  <div className="mt-3 space-y-1 font-mono text-sm">
                    <p>Electronics</p>
                    <p>Gadgets</p>
                  </div>

                </div>

              </div>

            </Output>

          </NotebookStep>


          {/* DATA ANALYSIS */}

          <div className="mb-16 mt-28 border-t border-gray-300 pt-16">

            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Data Analysis
            </p>

            <h2 className="text-3xl font-bold">
              Exploratory Analysis
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              After cleaning the dataset, the notebook moves into
              visualization and sales analysis.
            </p>

          </div>


          {/* STEP 12 */}

          <NotebookStep
            number="STEP 12"
            title="Total sales by region"
          >

            <CodeCell>
{`plt.figure(figsize=(8,5))

sns.barplot(
    data=df_cleaned,
    x="Region",
    y="Total Sales",
    estimator=sum,
    palette="cool"
)

plt.title(
    "Total Sales by region",
    fontsize=14
)

plt.xticks(rotation=30)
plt.show()`}
            </CodeCell>

            <Output>
  <img
    src="/images/g1.png"
    alt="Total Sales by Region"
    className="block w-full rounded-md"
  />
</Output>

          </NotebookStep>


          {/* STEP 13 */}

          <NotebookStep
            number="STEP 13"
            title="Sales trend over time"
          >

            <CodeCell>
{`# Sales trend over time

# Visualization created in the notebook
# using the cleaned sales dataset.`}
            </CodeCell>

            <Output>
  <img
    src="/images/g2.png"
    alt="Sales Trend Over Time"
    className="block w-full rounded-md"
  />
</Output>

          </NotebookStep>


          {/* STEP 14 */}

          <NotebookStep
            number="STEP 14"
            title="Sales share by category"
          >

            <CodeCell>
{`# Sales share by category

# Visualization created in the notebook
# using the cleaned sales dataset.`}
            </CodeCell>

            <Output>
  <img
    src="/images/g3.png"
    alt=" Sales Share by category"
    className="block w-full rounded-md"
  />
</Output>

          </NotebookStep>


        </div>


        {/* FOOTER */}

        <section className="border-t border-gray-300 pt-16">

          <div className="text-center">

            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">
              Project Stack
            </p>

            <p className="text-sm text-gray-600">
              Python · Pandas · NumPy · Matplotlib · Seaborn · Jupyter Notebook
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}