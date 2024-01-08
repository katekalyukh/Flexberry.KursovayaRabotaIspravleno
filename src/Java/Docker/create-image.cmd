docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovayarabotaispravleno-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovayarabotaispravleno-java/app ../../..
