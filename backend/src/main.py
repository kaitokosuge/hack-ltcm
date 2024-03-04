from fastapi import FastAPI
from src.routers import test

app = FastAPI()

app.include_router(test.router)
