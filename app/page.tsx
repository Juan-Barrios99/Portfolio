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

              Transforming data into strategic decisions.

            </h2>



            <p className="mt-8 text-xl text-gray-600 max-w-2xl">

              Python, SQL, Power BI, dashboards,
              and data analysis to solve real-world business problems.

            </p>





            {/* ABOUT ME */}

            <h3 className="mt-10 mb-4 text-3xl font-bold text-black">

              About Me

            </h3>



            <p className="mt-6 text-lg text-gray-700 max-w-2xl text-justify">

             Data Analyst and Industrial Engineer focused on transforming data into business value through analytics and engineering solutions. Experienced in SQL, Python, Power BI, Excel, and data visualization, with growing expertise in ETL pipelines, PostgreSQL, database management, and data workflows. Skilled in building dashboards, preparing data, and supporting strategic decision-making.
            </p>


          </div>


        </section>







        {/* PROJECTS */}


        <section className="pb-32">


          <h3 className="uppercase tracking-widest font-semibold mb-12">

            Featured Projects

          </h3>





          <div className="grid md:grid-cols-2 gap-10 items-stretch">





           







            {/* DATA ANALYTICS PROJECT */}



            <Link
              href="/Proyectos/Data-preparation-sales-analysis"
              className="h-full"
            >


              <article className="bg-white border-l-4 border-blue-600 rounded-xl p-8 hover:shadow-xl transition cursor-pointer h-full">


                <h4 className="text-3xl font-bold mb-3 text-black">

                  Data Analytics

                </h4>





                <p className="text-lg uppercase tracking-widest text-blue-700 font-semibold mb-5">

                  Data Preparation & Sales Analysis

                </p>





                <p className="text-gray-600 text-justify">


                  Data analysis project focused on preparing and exploring
                  sales data using Python. The project includes data cleaning,
                  standardization, and exploratory analysis to identify sales
                  trends, regional performance, and product category insights
                  to support data-driven decision-making.


                </p>





                <div className="flex flex-wrap gap-2 mt-6">


                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Python
                  </span>


                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Pandas
                  </span>


                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    SQL
                  </span>


                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Power BI
                  </span>


                </div>


              </article>


            </Link>





          </div>


        </section>



      </div>


    </main>
  );
}