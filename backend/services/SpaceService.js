const db = require('../config/db');

class SpaceService {
  async getAllSpaces(search = '') {
    const query = `SELECT * FROM spaces WHERE number LIKE $1`;
    const result = await db.query(query, [`%${search}%`]);
    return result.rows;
  }

  async getSpaceById(id) {
    const query = `SELECT * FROM spaces WHERE id = $1`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  async createSpace(zone_id, number, status) {
    const query = `INSERT INTO spaces (zone_id, number, status) VALUES ($1, $2, $3) RETURNING *`;
    const result = await db.query(query, [zone_id, number, status]);
    return result.rows[0];
  }

  async updateSpace(id, zone_id, number, status) {
    const query = `UPDATE spaces SET zone_id = $1, number = $2, status = $3 WHERE id = $4 RETURNING *`;
    const result = await db.query(query, [zone_id, number, status, id]);
    return result.rows[0];
  }

  async deleteSpace(id) {
    const query = `DELETE FROM spaces WHERE id = $1 RETURNING id`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = new SpaceService();
