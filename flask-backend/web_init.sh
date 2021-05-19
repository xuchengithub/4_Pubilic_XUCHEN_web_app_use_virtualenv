source set_up_env.sh
docker-compose -f ../database/docker-compose.yml up -d

npx create-react-app ../reactjs-frontend

pip3 install psycopg2-binary
sudo apt install gunicorn
pip3 install flask
pip3 install sqlalchemy
pip3 install flask
pip3 install flask_session
pip3 install flask_sqlalchemy
pip3 install pytz


#ser in env.env 检测环境变量
if [ "$DATABASE" = "postgres" ] #当这句话成立时执行then
then
    echo "Waiting for postgres..."
#-z 扫描通信端口时使用。检测postgre是否开启
    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

if [ "$FLASK_if_create_database" = "YES" ]
then
    echo "Creating the database tables..."
    python3 manage.py create_and_init_db
    echo "Tables created"
fi


echo "run gunicorn"
gunicorn manage:app -c gunicorn_set.py

exec "$@" #then run cammod  entrypoint bash,it will run bash
