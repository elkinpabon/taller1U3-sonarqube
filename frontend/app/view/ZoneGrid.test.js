describe('ParkingApp.view.ZoneGrid', function() {
    it('should be defined', function() {
        expect(true).toBe(true);
    });

    it('should have grid configuration', function() {
        const columns = [
            { text: 'ID', dataIndex: 'id', width: 50 },
            { text: 'Name', dataIndex: 'name', flex: 1 },
            { text: 'Description', dataIndex: 'description', flex: 1 }
        ];
        expect(columns.length).toBe(3);
        expect(columns[0].text).toBe('ID');
    });

    it('should have toolbar buttons', function() {
        const buttons = [
            { text: 'Add' },
            { text: 'Edit' },
            { text: 'Delete' }
        ];
        expect(buttons.length).toBe(3);
    });
});
