FROM python:3.12-slim

WORKDIR /usr/src/app

# Copie requirements.txt en premier pour profiter du cache Docker
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste du code source
COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
