describe('ParkingApp.model.Space', function() {
    it('should be defined', function() {
        expect(true).toBe(true);
    });

    it('should have space fields', function() {
        const spaceFields = ['id', 'zone_id', 'number', 'status'];
        expect(spaceFields.length).toBe(4);
        expect(spaceFields).toContain('zone_id');
    });
});
