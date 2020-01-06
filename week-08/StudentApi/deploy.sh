docker build -t sdg-student-api-16-image .

docker tag sdg-student-api-16-image registry.heroku.com/sdg-student-api-16/web

docker push registry.heroku.com/sdg-student-api-16/web

heroku container:release web -a sdg-student-api-16
