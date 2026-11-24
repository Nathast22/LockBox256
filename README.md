# LockBox256

Cifrador/descifrador de archivos y textos con AES-256-GCM, claves derivadas con PBKDF2 y verificación de integridad con SHA-256. Interfaz tipo chat con la mascota **Lockbox**.

## Estructura

- `backend/`: API REST en Python + FastAPI (núcleo criptográfico en `app/core/`)
- `frontend/`: React + TypeScript + Vite + Tailwind
- `docs/`: informe, formato del `.enc` y decisiones de seguridad

## Ejecutar en local

Backend (en `backend/`):

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload --port 8000
```

Frontend (en `frontend/`):

```bash
npm install
npm run dev
```

La app queda en http://localhost:5173 y las peticiones a `/api` se reenvían al backend.
