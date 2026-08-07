import Link from "next/link";


const CodeCell = ({ children }: { children: string }) => {

const highlightCode = (code: string) => {

const regex =
/(#.*$|(["'`])(?:(?=(\\?))\3.)*?\2|\b(import|from|for|in|if|else|return|def|as|with|open|print)\b|\b(requests|get|json|dump|load|DataFrame|drop_duplicates|dropna|sort_values|to_csv|connect|cursor|execute|commit|close|run)\b|\b\d+(\.\d+)?\b)/gm;


const parts: React.ReactNode[] = [];

let lastIndex = 0;

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


if(value.startsWith("#")){

parts.push(
<span
key={`comment-${match.index}`}
className="text-[#6a9955]"
>
{value}
</span>
);


}

else if(
value.startsWith('"') ||
value.startsWith("'") ||
value.startsWith("`")
){

parts.push(
<span
key={`string-${match.index}`}
className="text-[#a31515]"
>
{value}
</span>
);

}


else if(
/^(import|from|for|in|if|else|return|def|as|with|open|print)$/.test(value)
){

parts.push(
<span
key={`keyword-${match.index}`}
className="text-[#0000ff]"
>
{value}
</span>
);

}


else if(
/^(requests|get|json|dump|load|DataFrame|drop_duplicates|dropna|sort_values|to_csv|connect|cursor|execute|commit|close|run)$/.test(value)
){

parts.push(
<span
key={`function-${match.index}`}
className="text-[#795e26]"
>
{value}
</span>
);

}


else if(/^\d/.test(value)){


parts.push(
<span
key={`number-${match.index}`}
className="text-[#098658]"
>
{value}
</span>
);


}


else{

parts.push(
<span key={`other-${match.index}`}>
{value}
</span>
);

}


lastIndex = match.index + value.length;


}


if(lastIndex < code.length){

parts.push(
<span key={`remaining-${lastIndex}`}>
{code.slice(lastIndex)}
</span>
);

}


return parts;

};



return (

<div className="overflow-hidden border border-gray-200">


<div className="flex items-center border-b border-[#d9d9d9] bg-[#fafafa] px-4 py-2">

<span className="font-mono text-xs text-[#777]">

In&nbsp;[ ]:

</span>

</div>


<pre className="overflow-x-auto bg-[#f7f7f7] p-5 font-mono text-[13px] leading-6 text-[#24292e]">

<code>

{highlightCode(children)}

</code>

</pre>


</div>

);

};




const Output = ({children}:{children:React.ReactNode}) => {

return (

<div className="border border-gray-200 bg-white">


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
}:{
number:string;
title:string;
children:React.ReactNode;
})=>{


return (

<section className="mb-14">


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




export default function DataEngineeringETL(){


return (

<div className="min-h-screen bg-[#F8F7F3]">

<div className="mx-auto max-w-5xl px-6 py-20">


<Link
href="/"
className="mb-12 inline-flex rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white"
>

← Back to Home

</Link>




<header className="mb-24 text-center">


<p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">

Data Engineering Project

</p>


<h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">

Currency Exchange

<br/>

ETL Pipeline

</h1>


<p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">

Building an automated ETL pipeline that extracts currency exchange
rates from an API, transforms the data, and loads it into PostgreSQL.

</p>



<div className="mt-8 flex flex-wrap justify-center gap-2">


{[
"Python",
"Requests",
"Pandas",
"PostgreSQL",
"SQL",
"ETL"
].map((technology)=>(


<span
key={technology}
className="rounded-full border border-gray-300 px-4 py-2 text-sm"
>

{technology}

</span>



))}


</div>
<Link
  href="https://github.com/Juan-Barrios99/Portafolio/tree/main/data-projects/exchange-rate-etl"
  target="_blank"
  className="mt-8 inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
>
  View Repository
</Link>

</header>





<section className="mb-24">


<p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">

Project Overview

</p>



<h2 className="mb-6 text-3xl font-bold">

Automating data flow from API to database

</h2>


<p className="max-w-3xl text-lg leading-8 text-gray-600">

This project implements an ETL workflow where currency exchange
rates are extracted from an external API, cleaned and structured
using Python, and finally stored in a PostgreSQL database and a CSV for
future analysis.

</p>


</section>





<div className="border-t border-gray-300 pt-16">


<div className="mb-16">



<h2 className="text-3xl font-bold">

ETL Pipeline Steps

</h2>




</div>





<NotebookStep
  number="STEP 1"
  title="Fetch exchange rates"
>
 

  <CodeCell>{`import requests

response = requests.get(
    url,
    params=params
)

response.raise_for_status()

data = response.json()`}</CodeCell>

  <Output>
    <pre className="font-mono text-sm">
{`200 OK
Exchange rates retrieved successfully.`}
    </pre>
  </Output>
</NotebookStep>

<NotebookStep
  number="STEP 2"
  title="Save raw data"
>
  <CodeCell>{`import json

with open(
    "data/raw_rates.json",
    "w"
) as file:

    json.dump(
        data,
        file,
        indent=4
    )`}</CodeCell>

  <Output>
    <p className="font-mono text-sm">
      Raw data saved to
      <br />
      <strong>data/raw_rates.json</strong>
    </p>
  </Output>
</NotebookStep>




<NotebookStep
  number="STEP 3"
  title="Transform exchange rate data"
>
  <CodeCell>{`df = (
    pd.DataFrame(data)
      .drop_duplicates()
      .dropna()
      .sort_values(by="quote")
)

df.to_csv(
    "data/processed_rates.csv",
    index=False
)`}</CodeCell>

  <Output>
    <table className="w-full text-xs">
      <thead>
        <tr>
          <th>Date</th>
          <th>Base</th>
          <th>Quote</th>
          <th>Rate</th>
        </tr>
      </thead>

      <tbody>
        {[
          ["2026-01-01", "USD", "MXN", "18.42"],
          ["2026-01-01", "USD", "CAD", "1.36"],
          ["2026-01-01", "USD", "EUR", "0.92"],
          ["2026-01-01", "USD", "GBP", "0.79"],
          ["2026-01-01", "USD", "JPY", "156.20"],
        ].map((row, index) => (
          <tr key={index}>
            {row.map((value, column) => (
              <td key={column}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Output>
</NotebookStep>





<div className="mt-20 border-t border-gray-300 pt-16">








</div>
<NotebookStep
  number="STEP 4"
  title="Load into PostgreSQL"
>
  <CodeCell>{`cursor.execute(
    query,
    (
        row["date"],
        row["base"],
        row["quote"],
        row["rate"]
    )
)

conexion.commit()`}</CodeCell>

  <Output>
    <pre className="font-mono text-sm">
{`Rows inserted successfully
Duplicate records skipped`}
    </pre>
  </Output>
</NotebookStep>






<NotebookStep
  number="STEP 5"
  title="Run ETL pipeline"
>
  <CodeCell>{`
python extract.py
python transform.py
python load.py`}</CodeCell>

  <Output>
    <pre className="font-mono text-sm">
{`Extract ✓
Transform ✓
Load ✓

Pipeline completed successfully.`}
    </pre>
  </Output>
</NotebookStep>









<section className="border-t border-gray-300 pt-16">


<div className="text-center">


<p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">

Project Stack

</p>


<p className="text-sm text-gray-600">

Python · Requests · Pandas · PostgreSQL · ETL Pipeline

</p>


</div>


</section>





</div>


</div>

</div>

);

}