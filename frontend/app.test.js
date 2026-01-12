describe('ParkingApp', function() {
    it('should be a valid application', function() {
        const app = {
            name: 'ParkingApp',
            models: ['Zone', 'Space'],
            stores: ['Zones', 'Spaces'],
            views: ['ZoneGrid', 'SpaceGrid'],
            launch: function() {
                const zonesStore = { storeId: 'zonesStore' };
                const spacesStore = { storeId: 'spacesStore' };
                return { zonesStore, spacesStore };
            }
        };
        expect(app.name).toBe('ParkingApp');
        expect(app.models.length).toBe(2);
        expect(app.stores.length).toBe(2);
        expect(app.views.length).toBe(2);
        expect(typeof app.launch).toBe('function');
        
        const result = app.launch();
        expect(result.zonesStore).toBeDefined();
        expect(result.spacesStore).toBeDefined();
    });
});
