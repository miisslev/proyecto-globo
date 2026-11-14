const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'michelle',
  port: 5432,
});

// obtener ultima lectura para el panel en vivo
app.get('/api/ultima-lectura/:vueloId', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM lectura WHERE vuelo_id = $1 ORDER BY ts DESC LIMIT 1',
      [req.params.vueloId]
    );
    res.json(rows[0] || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// obtener datos para el boton de reporte
app.get('/api/reporte/:vueloId', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM v_reporte_vuelo WHERE vuelo_id = $1',
      [req.params.vueloId]
    );
    res.json(rows[0] || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Servidor encendido en http://localhost:3000'));