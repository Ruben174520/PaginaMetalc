// pages/api/metalPrices.js
import metalsData from './metals.json';

export default function handler(req, res) {
  try {
    // Responder con los precios de metales almacenados localmente
    res.status(200).json(metalsData);
  } catch (error) {
    // Manejar errores
    console.error('Error fetching metal prices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
