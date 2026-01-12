const db = require('../config/db');

class ZoneService {
  async getAllZones(search = '') {
    const query = `SELECT * FROM zones WHERE name LIKE $1`;
    const result = await db.query(query, [`%${search}%`]);
    return result.rows;
  }

  async getZoneById(id) {
    const query = `SELECT * FROM zones WHERE id = $1`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  async createZone(name, description) {
    const query = `INSERT INTO zones (name, description) VALUES ($1, $2) RETURNING *`;
    const result = await db.query(query, [name, description]);
    return result.rows[0];
  }

  async updateZone(id, name, description) {
    const query = `UPDATE zones SET name = $1, description = $2 WHERE id = $3 RETURNING *`;
    const result = await db.query(query, [name, description, id]);
    return result.rows[0];
  }

  async deleteZone(id) {
    const query = `DELETE FROM zones WHERE id = $1 RETURNING id`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = new ZoneService();
