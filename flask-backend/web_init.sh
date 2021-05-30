pip install --upgrade pip
pip install -r requirements.txt

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

mkdir ./project/static
mkdir ./project/templates
mkdir ./log

# echo "run gunicorn"
# nohup gunicorn manage:app -c gunicorn_set.py &

exec "$@" #then run cammod  entrypoint bash,it will run bash
