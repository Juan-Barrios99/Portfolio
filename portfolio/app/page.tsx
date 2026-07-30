import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-neutral-900">
      <div className="max-w-6xl mx-auto px-8">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center py-8">
          <h1 className="text-2xl font-bold">
            Juan Pablo Barrios Brindis
          </h1>

          <ul className="flex gap-8 text-sm">
            

           

            <li>
  <a
    href="https://www.linkedin.com/in/juan-pablo-barrios-brindis-406228402/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl font-semibold cursor-pointer hover:text-gray-500"
  >
    Linkedin
  </a>
</li>
          </ul>
        </nav>

        {/* HERO */}

        <section className="py-32">

          <div className="border-l-4 border-black pl-8">

            <h2 className="text-6xl font-bold leading-tight">

              <br />
              Transforming data into strategic decisions.
              <br />

            </h2>

            <p className="mt-8 text-xl text-gray-600 max-w-2xl">

              Python, SQL, Power BI, dashboards, 
              and data analysis to solve real-world business problems.


            </p>

            <h3 className="mt-10 mb-4 text-3xl font-bold text-black">
  About Me
</h3>
<p className="mt-6 text-lg text-gray-700 max-w-2xl text-justify">

  Data Analyst and Industrial Engineer with experience in SQL, Power BI, Excel, business analysis, KPI reporting, project 
coordination, market research, vendor management, and cross-functional collaboration. Experienced in creating 
dashboards  and supporting business decision-making. 

</p>
          </div>

        </section>

        {/* PROYECTOS */}

        <section className="pb-32">

          <h3 className="uppercase tracking-widest font-semibold mb-12">

            Projects

          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            <Link href="/Proyectos/Data-preparation-sales-analysis">

  <article className="bg-white border rounded-xl p-8 hover:shadow-xl transition cursor-pointer">

    <h4 className="text-3xl font-bold mb-4">

      Data Preparation & Sales Analysis

    </h4>

    <p className="text-gray-600 text-justify">

      Data cleaning and analysis using Python, focused on transforming an
       inconsistent sales dataset into a clean and reliable dataset for analysis. 
       I implemented data cleaning, standardization, and transformation processes, 
       followed by exploratory data analysis to identify sales trends, regional performance, 
       and category distribution, enabling data-driven decision-making.


    </p>

  </article>

</Link>

           

          </div>

        </section>

      </div>
    </main>
  );
}