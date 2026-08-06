import subprocess


subprocess.run(["python", "scripts/extract.py"], check=True)
subprocess.run(["python", "scripts/transform.py"], check=True)
subprocess.run(["python", "scripts/load.py"], check=True)


print("ETL pipeline completed successfully.")
