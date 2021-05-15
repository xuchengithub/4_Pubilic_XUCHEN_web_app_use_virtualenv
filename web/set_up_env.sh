export FLASK_APP=project/__init__.py
export FLASK_ENV=development
export FLASK_if_create_database=YES
export DATABASE_URL=postgresql://XUCHEN_flask:XUCHEN_flask@0.0.0.0:5433/XUCHEN_flask_prod

export SQL_HOST=0.0.0.0
export SQL_PORT=5433
export DATABASE=postgresql

echo "Upgrad_ENV_successed"

pip3 install psycopg2-binary
