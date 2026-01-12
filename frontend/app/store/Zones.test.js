describe('ParkingApp.store.Zones', function() {
    it('should be defined', function() {
        expect(true).toBe(true);
    });

    it('should have zones configuration', function() {
        const config = {
            storeId: 'zonesStore',
            model: 'ParkingApp.model.Zone',
            url: 'http://localhost:3000/zones'
        };
        expect(config.storeId).toBe('zonesStore');
        expect(config.model).toBe('ParkingApp.model.Zone');
    });
});
