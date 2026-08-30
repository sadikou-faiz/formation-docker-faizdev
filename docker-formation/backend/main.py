from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Backend API")

# Autorise le frontend (origine différente) à appeler cette API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# GET /api/message : seule route de l'API, renvoie un message fixe
@app.get("/api/message")
def get_message():
    return {"message": "Bonjour, c'est le backend qui parle !"}
