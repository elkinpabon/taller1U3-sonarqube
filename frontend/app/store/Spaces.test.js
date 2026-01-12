describe('ParkingApp.store.Spaces', function() {
    it('should be defined', function() {
        expect(true).toBe(true);
    });

    it('should have spaces configuration', function() {
        const config = {
            storeId: 'spacesStore',
            model: 'ParkingApp.model.Space',
            url: 'http://localhost:3000/spaces'
        };
        expect(config.storeId).toBe('spacesStore');
        expect(config.model).toBe('ParkingApp.model.Space');
    });
});
